import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient, Role } from '../app/generated/prisma/client';
import type {
  Category,
  Course,
  Lesson,
  Module,
} from '../app/generated/prisma/client';
import { auth } from '../lib/auth';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function removeData(): Promise<void> {
  await prisma.testimonial.deleteMany();
  await prisma.question.deleteMany();
  await prisma.quiz.deleteMany();
  await prisma.watch.deleteMany();
  await prisma.enrollment.deleteMany();
  await prisma.lesson.deleteMany();
  await prisma.module.deleteMany();
  await prisma.course.deleteMany();
  await prisma.category.deleteMany();
  await prisma.session.deleteMany();
  await prisma.verification.deleteMany();
  await prisma.account.deleteMany();
  await prisma.user.deleteMany();
}

async function createCategories(): Promise<Category[]> {
  return prisma.category.createManyAndReturn({
    data: [
      {
        title: 'Design',
        description: 'Design courses',
        thumbnail:
          'https://res.cloudinary.com/dyshqk0em/image/upload/v1767207869/code-class/categories/design.jpg',
      },
      {
        title: 'Development',
        description: 'Developments courses',
        thumbnail:
          'https://res.cloudinary.com/dyshqk0em/image/upload/v1767207870/code-class/categories/development.jpg',
      },
      {
        title: 'Marketing',
        description: 'Marketing courses',
        thumbnail:
          'https://res.cloudinary.com/dyshqk0em/image/upload/v1767207870/code-class/categories/marketing.jpg',
      },
      {
        title: 'IT & Software',
        description: 'IT & Software courses',
        thumbnail:
          'https://res.cloudinary.com/dyshqk0em/image/upload/v1767207870/code-class/categories/it_software.jpg',
      },
      {
        title: 'Personal Development',
        description: 'Personal development courses',
        thumbnail:
          'https://res.cloudinary.com/dyshqk0em/image/upload/v1767207870/code-class/categories/personal_development.jpg',
      },
      {
        title: 'Business',
        description: 'Business courses',
        thumbnail:
          'https://res.cloudinary.com/dyshqk0em/image/upload/v1767207872/code-class/categories/programming.jpg',
      },
      {
        title: 'Photography',
        description: 'Photography courses',
        thumbnail:
          'https://res.cloudinary.com/dyshqk0em/image/upload/v1767207871/code-class/categories/photography.jpg',
      },
      {
        title: 'Music',
        description: 'Music courses',
        thumbnail:
          'https://res.cloudinary.com/dyshqk0em/image/upload/v1767207870/code-class/categories/music.jpg',
      },
    ],
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function createUsers(): Promise<any> {
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

  return {
    johnDoe,
    aliceCooper,
    bobSmith,
    carolSanders,
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function createCourses({ categories, johnDoe }: any): Promise<Course[]> {
  return prisma.course.createManyAndReturn({
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
        instructorId: johnDoe.user.id,
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
        instructorId: johnDoe.user.id,
      },
    ],
  });
}

async function createEnrollments({
  courses,
  bobSmith,
  carolSanders,
  aliceCooper,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any): Promise<void> {
  await prisma.enrollment.createMany({
    data: [
      {
        status: 'completed',
        method: 'paypal',
        courseId: courses[0].id,
        studentId: bobSmith.user.id,
      },
      {
        status: 'completed',
        method: 'stripe',
        courseId: courses[1].id,
        studentId: carolSanders.user.id,
      },
      {
        status: 'completed',
        method: 'stripe',
        courseId: courses[1].id,
        studentId: aliceCooper.user.id,
      },
    ],
  });
}

async function createModules(courses: Course[]) {
  return prisma.module.createManyAndReturn({
    data: [
      {
        title: 'Python Basics',
        description: 'Learn the fundamentals of Python programming language.',
        status: 'active',
        slug: 'python-basics',
        order: 0,
        courseId: courses[0].id,
      },
      {
        title: 'HTML5 and CSS3 Essentials',
        description: 'Master HTML5 and CSS3 for modern web development.',
        status: 'active',
        slug: 'html5-css3-essentials',
        order: 0,
        courseId: courses[1].id,
      },
    ],
  });
}

async function createLessons(modules: Module[]): Promise<Lesson[]> {
  return prisma.lesson.createManyAndReturn({
    data: [
      {
        title: 'Introduction to Variables',
        description: 'Learn the basics of variables in programming.',
        duration: 630,
        videoUrl:
          'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        slug: 'introduction-to-variables',
        order: 0,
        moduleId: modules[0].id,
      },
      {
        title: 'HTML Basics',
        description: 'Understand the fundamentals of HTML.',
        duration: 456,
        videoUrl:
          'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        slug: 'html-basics',
        order: 0,
        moduleId: modules[0].id,
      },
      {
        title: 'Introduction to Machine Learning',
        description:
          'Get introduced to the exciting field of machine learning.',
        duration: 1200,
        videoUrl:
          'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        slug: 'introduction-to-machine-learning',
        moduleId: modules[0].id,
        order: 0,
      },
      {
        title: 'Composition Techniques in Photography',
        description:
          'Master various composition techniques for stunning photographs.',
        duration: 200,
        videoUrl:
          'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        slug: 'composition-techniques-in-photography',
        moduleId: modules[1].id,
        order: 0,
      },
      {
        title: 'Budgeting Strategies',
        description:
          'Learn effective budgeting strategies for personal finance.',
        duration: 537,
        videoUrl:
          'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        slug: 'budgeting-strategies',
        moduleId: modules[1].id,
        order: 0,
      },
    ],
  });
}

async function createTestimonials(
  courses: Course[],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { aliceCooper, bobSmith, carolSanders }: any,
) {
  await prisma.testimonial.createMany({
    data: [
      {
        content: 'Great course! I learned a lot.',
        rating: 5,
        studentId: aliceCooper.user.id,
        courseId: courses[0].id,
      },
      {
        content: 'What a JavaScript Course, Awesome!!!',
        rating: 5,
        studentId: bobSmith.user.id,
        courseId: courses[1].id,
      },
      {
        content: 'One of the best JS Course!!!',
        rating: 4,
        studentId: carolSanders.user.id,
        courseId: courses[1].id,
      },
    ],
  });
}

async function seedDatabase(): Promise<void> {
  const categories = await createCategories();
  const { johnDoe, aliceCooper, bobSmith, carolSanders } = await createUsers();
  const courses = await createCourses({ categories, johnDoe });
  await createEnrollments({ courses, bobSmith, aliceCooper, carolSanders });
  const modules = await createModules(courses);
  await createLessons(modules);
  await createTestimonials(courses, { aliceCooper, bobSmith, carolSanders });
}

try {
  await removeData();
  await seedDatabase();
} catch (e) {
  console.error(e);
} finally {
  await prisma.$disconnect();
}
