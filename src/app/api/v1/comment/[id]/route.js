import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";

export async function GET(_, { params }) {
   const { id: commentId } = params;

   try {
      const comment = await prisma.comment.findUnique({
         where: {
            id: commentId,
         },
      });
      return NextResponse.json({ data: comment }, { status: 200 });
   } catch (error) {
      console.log(error);
      return NextResponse.json({ error }, { status: error.status });
   }
}
