import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const password = await hash("leopass123", 12);
  const user = await prisma.user.upsert({
    where: { email: "hello@admin.com" },
    update: {},
    create: {
      email: "hello@admin.com",
      name: "Leo",
      password,
    },
  });
  console.log({ user });
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
