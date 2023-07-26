import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";

export async function GET(req) {
   /**
    * * LOGIC TO GET ALL CATEGORY!
    */

   try {
      const allCategory = await prisma.category.findMany();
      return NextResponse.json({ data: allCategory }, { status: 200 });
   } catch (error) {
      console.log(error);
      return NextResponse.json({ error }, { status: error.status });
   }
}

export async function POST(req) {
   const { name } = await req.json();

   try {
      const createCategory = await prisma.category.create({
         data: {
            name,
         },
      });
      return NextResponse.json({ data: createCategory }, { status: 200 });
   } catch (error) {
      console.log(error);
      return NextResponse.json({ error }, { status: error.status });
   }
}
