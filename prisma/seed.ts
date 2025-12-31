import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../app/generated/prisma/client';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function removeData(): Promise<void> {
  await prisma.category.deleteMany();
  await prisma.course.deleteMany();
}

async function seedDatabase(): Promise<void> {
  const categories = await prisma.category.createManyAndReturn({
    data: [
      {
        title: 'Development',
        description: 'Developments Courses',
        thumbnail:
          'https://res.cloudinary.com/dyshqk0em/image/upload/v1767207870/code-class/categories/development.jpg',
      },
    ],
  });

  /*const courses = await prisma.course.createManyAndReturn({
    data: [
      {
        title: 'Learn Python',
        subtitle: 'Learn Python Like a Pro',
        description:
          'Learn Python programming language from scratch with hands-on exercises.',
        price: 29.99,
        active: true,
        categoryId: categories[0].id,
        thumbnail:
          'https://res.cloudinary.com/dyshqk0em/image/upload/v1767210336/code-class/courses/python_thumbnail.png',
        learning: [
          'Learn Python from the basic fundamentals',
          'Learn how to apply the fundamentals to build things',
          'Learn to make projects that are production ready',
          'Get a bonus chapter on using Python for Machine Learning',
        ],
      },
      {
        title: 'Mastering JavaScript',
        subtitle: 'JavaScript Fundamentals Like a PRO',
        description:
          'Learn JavaScript fundamentals from scratch with hands-on exercises.',
        price: 24.99,
        active: true,
        categoryId: categories[0].id,
        thumbnail:
          'https://res.cloudinary.com/dyshqk0em/image/upload/v1767210336/code-class/courses/learn_js_thumbnail.jpg',
        learning: [
          'Learn JavaScript from the basic fundamentals',
          'Learn how to apply the fundamentals to build things',
          'Learn to make projects that are production ready',
          'Get a bonus chapter on using JavaScript for Full Stack Develeopment',
        ],
      },
    ],
  });*/
}

try {
  await removeData();
  await seedDatabase();
} catch (e) {
  console.error(e);
} finally {
  await prisma.$disconnect();
}
