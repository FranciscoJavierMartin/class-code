import type {
  Category,
  Course,
  Module,
  Testimonial,
  User,
  Lesson,
} from '@/generated/prisma/client';

export type FullCourse = Course & {
  modules: Module[];
  testimonials: Testimonial[];
  category: Category;
  instructor: User;
};

export type ModuleWithLessons = Module & {
  lessons: Lesson[];
};
