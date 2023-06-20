import { NextResponse } from "next/server";
import { User } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const user: User | null = await prisma.user.findUnique({ where: { id } });
  if (!user) {
    return NextResponse.json({ message: "User not found" });
  }
  return NextResponse.json({ user });
}
