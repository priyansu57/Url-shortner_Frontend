import { axioshortener } from "../api/axios";

 
 export const Register = async ({name, email, password}) => { 
    // Perform registration logic here
    console.log("Registering with name:", name);
    console.log("Registering with email:", email);
    console.log("Registering with password:", password);
    
    const data = await axioshortener.post("/api/auth/register", {
      name, email, password
    });
    console.log("Registration response data:", {data});
    return data;
 }