"use client";

import React, { useEffect, useState } from "react";
import slugify from "slugify";
import { API_URL, API_FOLDER, API_VER } from "@/config/api";
import { toast } from "react-hot-toast";

export const CreateProduct = ({ categoryData = [] }) => {
   const [productData, setProductData] = useState({
      name: "",
      slug: "",
      shortDescription: "",
      categoryId: "",
      overview: "",
      featuredImage: "Featured Image",
      productImages: "Product Images",
      downloadableFile: "",
      authorId: "clkjr3jop0000rc4aoyerk233",
   });

   const handleEventChange = (event) => {
      const { name, value } = event.target;
      setProductData({ ...productData, [name]: value });
   };

   const handleSubmitCreateProduct = async () => {
      const { name, slug, shortDescription, categoryId, overview, featuredImage, productImages, downloadableFile, authorId } = productData;
      // http://localhost:3000/api/v1/auth/data
      const res = await fetch(`${API_URL}/${API_FOLDER}/${API_VER}/product/`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            name,
            slug,
            shortDescription,
            categoryId,
            overview,
            featuredImage,
            productImages,
            downloadableFile,
            authorId,
         }),
      });
      const { data, error } = await res.json();

      if (error) {
         toast.error("Failed creating product");
         return;
      }

      toast.success("Create product succesful");
   };

   useEffect(() => {
      const slug = slugify(productData.name, { replacement: "-", lower: true, trim: true });
      setProductData({ ...productData, slug: slug });
   }, [productData.name]);

   return (
      <div className="max-w-lg m-auto space-y-12">
         <h1>Create Product</h1>
         <div className="space-y-4">
            <input name="name" placeholder="Product name" onChange={handleEventChange} />
            <input name="shortDescription" placeholder="Short description" onChange={handleEventChange} />
            <textarea name="overview" placeholder="Overview" onChange={handleEventChange} />
            <select name="categoryId" onChange={handleEventChange}>
               {categoryData.map((item) => {
                  return (
                     <option key={item.id} value={item.id}>
                        {item.name}
                     </option>
                  );
               })}
            </select>
            <label>Featured Image</label>
            <input name="featuredImage" type="file" />
            <label>Product Images</label>
            <input name="productImages" type="file" multiple />
            <label>Downloadable Images</label>
            <input name="downloadableFile" type="file" />
            <button onClick={handleSubmitCreateProduct}>Create </button>
         </div>
      </div>
   );
};
