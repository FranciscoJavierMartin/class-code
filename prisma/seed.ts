import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient, Role } from '../app/generated/prisma/client';
import { auth } from '../lib/auth';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function removeData(): Promise<void> {
  await prisma.category.deleteMany();
  await prisma.session.deleteMany();
  await prisma.verification.deleteMany();
  await prisma.account.deleteMany();
  await prisma.user.deleteMany();
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

  const johnDoe = await auth.api.signUpEmail({
    body: {
      email: 'john@doe.com',
      password: 'Password1.',
      firstName: 'John',
      lastName: 'Doe',
      name: 'John Doe',
      designation: 'Senior Software Engineer, Dell Inc.',
      bio: 'Experienced educator passionate about fostering student learning and development.',
      role: Role.INSTRUCTOR,
    },
  });

  const aliceCooper = await auth.api.signUpEmail({
    body: {
      email: 'alice@cooper.com',
      password: 'Password1.',
      firstName: 'Alice',
      lastName: 'Cooper',
      name: 'Alice Cooper',
      designation: 'Junior Develeoper, Microsoft',
      bio: 'I love coding',
      role: Role.STUDENT,
    },
  });

  const bobSmith = await auth.api.signUpEmail({
    body: {
      email: 'bob@smith.com',
      password: 'Password1.',
      firstName: 'Bob',
      lastName: 'Smith',
      name: 'Bob Smith',
      designation: 'Junior Develeoper, Acme',
      bio: 'Passionate about finance and investing.',
      role: Role.STUDENT,
    },
  });

  const carolSanders = await auth.api.signUpEmail({
    body: {
      email: 'carol@sanders.com',
      password: 'Password1.',
      firstName: 'Carol',
      lastName: 'Sanders',
      name: 'Carol Sanders',
      designation: 'Junior Develeoper, OpenText',
      bio: 'I love programming, I eat JavaScript',
      role: Role.STUDENT,
    },
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
