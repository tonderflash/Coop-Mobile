import User from "../../../data/models/user.model";

export default interface LoginResponse{
    user: User,
    jwt: string
}
