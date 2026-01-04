import { prisma } from '~~/lib/prisma';
import type { EventHandlerRequest } from 'h3';

export default defineEventHandler<
  EventHandlerRequest,
  Promise<{ courses: FullCourse[] }>
>(async () => {
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
