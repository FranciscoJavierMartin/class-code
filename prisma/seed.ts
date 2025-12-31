import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../app/generated/prisma/client';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function seedDatabase(): Promise<void> {
  // TODO: Implement
}

try {
  await seedDatabase();
} catch (e) {
  console.error(e);
} finally {
  await prisma.$disconnect();
}
