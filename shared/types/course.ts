import type {
  Category,
  Course,
  Module,
  Testimonial,
  User,
} from '@/generated/prisma/client';

export type FullCourse = Course & {
  modules: Module[];
  testimonials: Testimonial[];
  category: Category;
  instructor: User;
};
