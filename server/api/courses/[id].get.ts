import type { EventHandlerRequest } from 'h3';
import { prisma } from '~~/lib/prisma';
import { courseIdSchema } from '~~/shared/utils/validations/schemas/course';

export default defineEventHandler<EventHandlerRequest>(async (event) => {
  const { id } = await validateRouterParams(event, courseIdSchema);
  const course = await prisma.course.findUnique({
    where: {
      id,
    },
    include: {
      category: true,
      instructor: true,
      modules: true,
      testimonials: {
        include: {
          student: true,
        },
      },
    },
  });

  return {
    course,
  };
});
