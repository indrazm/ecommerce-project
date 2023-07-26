import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";

export async function GET(req) {
   const { searchParams } = new URL(req.url);
   const productSlug = searchParams.get("slug");

   try {
      if (productSlug) {
         const product = await prisma.product.findFirst({
            where: {
               slug: productSlug,
            },
         });

         return NextResponse.json({ data: product }, { status: 200 });
      }

      const allProducts = await prisma.product.findMany();
      return NextResponse.json({ data: allProducts }, { status: 200 });
   } catch (error) {
      console.log(error);
      return NextResponse.json({ error }, { status: error.status });
   }
}

export async function POST(req) {
   const { name, slug, shortDescription, overview, featuredImage, productImages, downloadableFile, authorId } = await req.json();

   try {
      const createProduct = await prisma.product.create({
         data: {
            name,
            slug,
            shortDescription,
            overview,
            featuredImage,
            productImages,
            downloadableFile,
            authorId,
         },
      });
      return NextResponse.json({ data: createProduct }, { status: 201 });
   } catch (error) {
      console.log(error);
      return NextResponse.json({ error }, { status: error.status });
   }
}
