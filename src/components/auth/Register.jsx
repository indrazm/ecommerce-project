"use client";

import { useState } from "react";
import slugify from "slugify";
import { API_URL, API_FOLDER, API_VER } from "@/config/api";
import { toast } from "react-hot-toast";

export const Register = () => {
   const [loading, setLoading] = useState(false);
   const [registerData, setRegisterData] = useState({
      name: "",
      username: "",
      email: "",
      password: "",
   });

   const handleEventChange = (event) => {
      const { name, value } = event.target;
      if (name === "username") {
         setRegisterData({
            ...registerData,
            [name]: slugify(value, {
               trim: true,
               replacement: "",
               lower: true,
            }),
         });
         return;
      }

      setRegisterData({ ...registerData, [name]: value });
   };

   const handleSubmitRegister = async () => {
      const { name, username, email, password } = registerData;

      if (!name || !username || !email || !password) {
         toast.error("Please fill all fields");
         return;
      }

      setLoading(true);

      const res = await fetch(`${API_URL}/${API_FOLDER}/${API_VER}/auth/register`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            name,
            username,
            email,
            password,
         }),
      });
      const { data, error } = await res.json();

      if (error) {
         setLoading(false);
         toast.error(error);
         return;
      }

      toast.success("Register succesful!");
      setLoading(false);
      setRegisterData({
         name: "",
         username: "",
         email: "",
         password: "",
      });
   };

   return (
      <div className="h-screen flex items-center">
         <div className="w-[320px] m-auto space-y-8">
            <div className="text-center">
               <h1>Join</h1>
               <p>Fill in with your details</p>
            </div>
            <div className="space-y-4">
               <input name="name" value={registerData.name} placeholder="Fullname" onChange={handleEventChange} />
               <input name="username" value={registerData.username} placeholder="username" onChange={handleEventChange} />
               <input name="email" value={registerData.email} placeholder="email@something.com" onChange={handleEventChange} />
               <input name="password" value={registerData.password} type="password" placeholder="password" onChange={handleEventChange} />
               <button disabled={loading} onClick={handleSubmitRegister}>
                  Join
               </button>
            </div>
         </div>
      </div>
   );
};
