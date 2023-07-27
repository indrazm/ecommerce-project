"use client";

import { Toaster } from "react-hot-toast";

export const ToastProvider = ({ children }) => {
   return (
      <>
         {children}
         <Toaster
            toastOptions={{
               style: {
                  fontSize: "12px",
                  padding: "3px",
               },
            }}
         />
      </>
   );
};
