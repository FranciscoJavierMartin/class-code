import { prisma } from '~~/lib/prisma';
import { idSchema } from '~~/shared/utils/validations/schemas/general';

export default defineEventHandler(async (event) => {
  const { id } = await validateRouterParams(event, idSchema);

  const instructor = await prisma.user.findUnique({
    where: { id },
    select: {
      name: true,
      designation: true,
      bio: true,
      image: true,
    },
  });

  const courses = await prisma.course.count({
    where: {
      instructorId: id,
    },
  });

  const enrollments = await prisma.enrollment.count({
    where: {
      course: {
        instructorId: id,
      },
    },
  });

  const testimonials = await prisma.testimonial.aggregate({
    _avg: {
      rating: true,
    },
    _count: true,
    where: {
      course: {
        instructorId: id,
      },
    },
  });

  return {
    instructor,
    courses,
    enrollments,
    reviews: testimonials._count,
    rating: +(testimonials._avg.rating?.toPrecision(2) || 0),
  };
});
