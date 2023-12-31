import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const password = await hash("leopass123", 12);
  const user = await prisma.user.upsert({
    where: { email: "hello@iamkewal.com" },
    update: {},
    create: {
      email: "hello@iamkewal.com",
      name: "Kewal",
      password,
      username: "kewal",
      jobtitle: "Full Stack Developer",
    },
  });
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
