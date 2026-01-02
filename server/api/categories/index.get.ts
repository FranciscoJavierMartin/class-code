import { prisma } from '~~/lib/prisma';

export default defineEventHandler(async () => {
  const categories = await prisma.category.findMany();

  return {
    categories,
  };
});
