import BaseHttpClient from "../httpClient/httpClient";
import LoginResponse from "../../common/interfaces/login/loginResponse";
import LoginRequest from "../../common/interfaces/login/loginRequest";

const loginService = (body: LoginRequest)=>{
    return BaseHttpClient.post<LoginResponse>("login", body);
}

export default loginService
