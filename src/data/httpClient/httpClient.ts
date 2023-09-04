import {AxiosError, AxiosRequestConfig,} from "axios";
import qs from "qs";
import errorMessages from "../../common/constants/errorMessages";
import apiRoute from "../../common/constants/server";
import {mockedAxios} from "../../../axios.mock";

export default class BaseHttpClient {
    private static authHeader: { Authorization: string } | undefined;
    static token: string
    static interceptor = mockedAxios.create({
        baseURL: apiRoute,
        paramsSerializer: {
            serialize: (params) => {
                return qs.stringify(params, {
                    encodeValuesOnly: true, // prettify URL
                });
            },
        },
    });

    private static async request<T>(requestConfig: AxiosRequestConfig) {
        const headers = { ...this.authHeader, ...requestConfig.headers }

        try {
            const response = await BaseHttpClient.interceptor.request<T>({
                ...requestConfig,
                headers,
            });

            return response
        }catch (e) {
            console.log("ERROR", e)
            console.log("REQUEST ERRROR", (e as any).response?.data)

            const error = (e as AxiosError)

            let errorMessage = ""


            if(error.response){
                if (error.response.status == 413){
                    errorMessage = errorMessages['413']
                    throw new Error(errorMessage)
                }

                if (Array.isArray((e as any).response.data.error.details) && (e as any).response.data.error.details[0].messages[0].id == 'Auth.form.error.user.no_profile'){
                    errorMessage = errorMessages['Auth.form.error.user.no_profile']
                    throw new Error(errorMessage)
                }

                errorMessage = errorMessages[(e as any).response.data.error.message]

                if (!errorMessage){
                    errorMessage = (e as any).response.data.error.message
                }

                throw new Error(errorMessage)
            }

            if(error.message){
                errorMessage = errorMessages[error.message]
                throw new Error(errorMessage)
            }
        }
    }

    static setAuthHeader(token: string | undefined) {
        if (!token) {
            this.authHeader = undefined;
            return;
        }

        this.token = token

        this.authHeader = { Authorization: `Bearer ${token}` };
    }

    static async get<T>(url: string, params?: object) {
        return (await this.request<T>({ method: "get", params, url }))?.data;
    }

    static async getAll<T>(url: string, params?: object) {
        return await this.get<T>(url, params);
    }

    static async post<T>(url: string, body: any, useData: boolean = true, headers = {}, options = {}) {
        return (await this.request<T>({ method: "post", data: useData ? {data: body} : body, url, headers, ...options }))?.data;
    }

    static async update<T>(url: string, body: object, useData: boolean = true) {
        return (await this.request<T>({ method: "put", data: useData ? {data: body} : body, url }))?.data;
    }
}
