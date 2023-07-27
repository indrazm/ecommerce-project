"use client";

import { useState } from "react";
import { API_URL, API_FOLDER, API_VER } from "@/config/api";

export const Login = () => {
   const [loginData, setLoginData] = useState({
      email: "",
      password: "",
   });

   const handleEventChange = (event) => {
      const { name, value } = event.target;
      setLoginData({ ...loginData, [name]: value });
   };

   const handleSubmitLogin = async () => {
      const { email, password } = loginData;
      // http://localhost:3000/api/v1/auth/data
      const res = await fetch(`${API_URL}/${API_FOLDER}/${API_VER}/auth/login`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            email,
            password,
         }),
      });
      const data = await res.json();
      console.log(data);
   };

   return (
      <div className="h-screen flex items-center">
         <div className="w-[320px] m-auto space-y-8">
            <div className="text-center">
               <h1>Login</h1>
               <p>Fill in with your details</p>
            </div>
            <div className="space-y-4">
               <input name="email" placeholder="email@something.com" onChange={handleEventChange} />
               <input name="password" type="password" placeholder="password" onChange={handleEventChange} />
               <button onClick={handleSubmitLogin}>Login</button>
            </div>
         </div>
      </div>
   );
};
