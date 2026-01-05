import type { EventHandlerRequest } from 'h3';
import { prisma } from '~~/lib/prisma';
import { idSchema } from '~~/shared/utils/validations/schemas/general';

export default defineEventHandler<EventHandlerRequest>(async (event) => {
  const { id } = await validateRouterParams(event, idSchema);
  const course = await prisma.course.findUnique({
    where: {
      id,
    },
    include: {
      category: true,
      instructor: true,
      testimonials: {
        include: {
          student: true,
        },
      },
    },
  });

  if (!course) {
    throw createError({
      status: 404,
      statusMessage: 'Course not found',
    });
  }

  const modules = await prisma.module.findMany({
    where: {
      courseId: course.id,
    },
    include: {
      lessons: true,
    },
  });

  const durationModules: Record<string, number> = {};
  modules.forEach((module) => {
    durationModules[module.id] = module.lessons.reduce(
      (acc, lesson) => acc + lesson.duration.toNumber(),
      0,
    );
  });

  const durationCourse = Object.values(durationModules).reduce(
    (acc, duration) => acc + duration,
    0,
  );

  return {
    course,
    modules,
    durationCourse,
    durationModules,
  };
});
