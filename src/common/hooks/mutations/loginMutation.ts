import {useMutation} from "@tanstack/react-query";
import loginService from "../../../data/services/login.service";
import LoginRequest from "../../interfaces/login/loginRequest";

const useLoginMutation = ()=>{
    const mutation = useMutation({
        mutationFn: (body: LoginRequest) => loginService(body)
    })

    return mutation
}

export default useLoginMutation
