import { betterAuth } from 'better-auth';
import { PrismaClient } from '../app/generated/prisma/client';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { openAPI } from 'better-auth/plugins';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [openAPI()],
  user: {
    modelName: 'User',
    additionalFields: {
      firstName: {
        type: 'string',
      },
      lastName: {
        type: 'string',
      },
      bio: {
        type: 'string',
        required: false,
      },
      designation: {
        type: 'string',
        required: false,
      },
      role: {
        type: 'string',
      },
    },
  },
  session: {
    modelName: 'Session',
  },
  account: {
    modelName: 'Account',
  },
  verification: {
    modelName: 'Verification',
  },
  advanced: {
    // TODO: Remove this before production. Only for testing purposes (Bruno)
    disableOriginCheck: import.meta.dev,
  },
});
