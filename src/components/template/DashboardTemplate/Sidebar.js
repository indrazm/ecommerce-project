import React from "react";
import { Chart21, Box1, Bag } from "iconsax-react";
import Link from "next/link";

const menu = [
   { label: "Dashboard", icon: <Chart21 size={18} />, route: "/dashboard" },
   { label: "Product", icon: <Box1 size={18} />, route: "/dashboard/product" },
   { label: "Order", icon: <Bag size={18} />, route: "/dashboard/order" },
];

export const Sidebar = () => {
   return (
      <div>
         {menu.map(({ label, icon, route }, index) => {
            return (
               <Link href={route}>
                  <div key={index} className="flex text-sm gap-3 items-center p-3 hover:bg-primary hover:text-black rounded cursor-pointer">
                     <div>{icon}</div>
                     <div>{label}</div>
                  </div>
               </Link>
            );
         })}
      </div>
   );
};
