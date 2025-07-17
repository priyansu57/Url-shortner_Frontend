import { axioshortener } from "../api/axios"

export const Logout = async () => {
    const data = await axioshortener.post("/api/auth/logout");

    console.log("Data of Logout :" , data);
     return data ;


  
}