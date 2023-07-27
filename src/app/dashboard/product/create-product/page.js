import { CreateProduct } from "@/components/dashboard/product/CreateProduct";
import { API_URL, API_FOLDER, API_VER } from "@/config/api";

async function getAllCategories() {
   const res = await fetch(`${API_URL}/${API_FOLDER}/${API_VER}/category`, {
      cache: "no-store",
   });
   const data = await res.json();
   return data;
}

export default async function Page() {
   const { data: categoryData } = await getAllCategories();

   return <CreateProduct categoryData={categoryData} />;
}
