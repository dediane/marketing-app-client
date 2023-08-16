import axiosService from "./axios-service"
import axios from "axios"
import authenticationService from "./auth-service"
const axiosInstance = axiosService.getInstance()

const userService = {
    login (email :string, password :string) { 
        return axiosInstance.post("/auth/login", { email, password }).then((res: { data: any }) => res.data)
    },
      
    async register (first_name :string,last_name :string, email :string ,password :string) {
      try {
        return await axiosInstance.post("/user/register", { first_name, last_name, email, password })
      } catch(err: any) {
        const parsed = err.response.data
        return {status: false, error: parsed.message[0]}
      }
    }
}

export default userService;