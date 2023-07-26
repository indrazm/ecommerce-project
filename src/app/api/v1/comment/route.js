import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";

export async function GET(req) {
   const { searchParams } = new URL(req.url);
   const productId = searchParams.get("productid");

   try {
      if (productId) {
         const allComment = await prisma.comment.findMany({
            where: {
               productId,
            },
         });

         return NextResponse.json({ data: allComment }, { status: 200 });
      }

      const allComment = await prisma.comment.findMany();
      return NextResponse.json({ data: allComment }, { status: 200 });
   } catch (error) {
      console.log(error);
      return NextResponse.json({ error }, { status: error.status });
   }
}

export async function POST(req) {
   const { body, productId, userId } = await req.json();

   try {
      const createComment = await prisma.comment.create({
         data: {
            body,
            productId,
            userId,
         },
      });
      return NextResponse.json({ data: createComment }, { status: 201 });
   } catch (error) {
      console.log(error);
      return NextResponse.json({ error }, { status: error.status });
   }
}
