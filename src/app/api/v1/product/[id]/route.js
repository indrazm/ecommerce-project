import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";

export async function GET(_, { params }) {
   const { id: productId } = params;

   try {
      const product = await prisma.product.findUnique({
         where: {
            id: productId,
         },
      });
      return NextResponse.json({ data: product }, { status: 200 });
   } catch (error) {
      console.log(error);
      return NextResponse.json({ error }, { status: error.status });
   }
}
