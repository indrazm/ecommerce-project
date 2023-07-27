import React from "react";
import Link from "next/link";

export const AllProduct = () => {
   return (
      <div>
         <div className="flex justify-between">
            <div>
               <h3>All products</h3>
               <p>Your all products here.</p>
            </div>
            <div>
               <Link href="/dashboard/product/create-product">
                  <button>Create product</button>
               </Link>
            </div>
         </div>
      </div>
   );
};
