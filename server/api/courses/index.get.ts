import { prisma } from '~~/lib/prisma';

export default defineEventHandler(async (event) => {
  const courses = await prisma.course.findMany();

  return {
    courses,
  };
});
