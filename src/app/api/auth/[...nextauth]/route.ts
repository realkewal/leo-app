// import NextAuth, { NextAuthOptions } from "next-auth";

// import { NextApiHandler } from "next";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// const handler: NextApiHandler = NextAuth({
//   adapter: PrismaAdapter(prisma),
// } as NextAuthOptions);

// export { handler as GET, handler as POST };

import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
