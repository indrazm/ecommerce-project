import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req) {
  const { email, password } = await req.json();

  try {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (user) {
      const isPasswordMatched = await compare(password, user.password);

      if (isPasswordMatched) {
        const userData = {
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          bio: user.bio,
          avatar: user.avatar,
        };

        const token = sign(userData, process.env.TOKEN_SECRET_KEY);

        cookies().set("token", token);

        return NextResponse.json({ record: userData }, { status: 200 });
      }

      return NextResponse.json(
        { message: "Email and password WRONG!" },
        { status: 403 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: error.status });
  }
}
