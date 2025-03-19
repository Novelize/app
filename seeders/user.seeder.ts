import type {PrismaClient} from "@prisma/client";

export async function userSeeder(prisma: PrismaClient) {
  return prisma.user.upsert({
    where: {email: 'josh@novelize.app'},
    update: {},
    create: {
      email: 'josh@novelize.app',
      firstName: 'Josh',
      lastName: 'Evensen',
      authId: 'abc',
      stripeId: '12345',
      isAdmin: true,
    },
  });
}
