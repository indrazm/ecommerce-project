import { Sidebar } from "./Sidebar";

export const DashboardTemplate = ({ children }) => {
   return (
      <section className="flex min-h-screen">
         <aside className="w-[230px] p-6 border-r-2 bg-zinc-900 border-zinc-800 space-y-12">
            <div className="space-y-8">
               <div>eCommerce</div>
               <Sidebar />
            </div>
         </aside>
         <main className="w-[calc(100vw-230px)] p-6">{children}</main>
      </section>
   );
};
