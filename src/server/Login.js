
import { axioshortener } from "../api/axios";

export const Login = async ({email, password}) => {
   // Perform login logic here
   // console.log("Logging in with email:", email);
  //  console.log("Logging in with password:", password);
    
      
   const data = await axioshortener.post("/api/auth/login", {
     email, password
   });
    console.log("Login response data:", data.data.user);
   return data; 
  }