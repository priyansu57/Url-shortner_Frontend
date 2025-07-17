import { axioshortener } from "../api/axios";

export const Checker = async () => {

const response= await axioshortener.get("/api/auth/me");

return response.data;


} 