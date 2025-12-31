import { prisma } from '~~/lib/prisma';

export default defineEventHandler(async (event) => {
  const courses = await prisma.course.findMany({
    include: {
      modules: true,
      testimonials: true,
      category: true,
      instructor: true,
    },
  });

  return {
    courses,
  };
});
