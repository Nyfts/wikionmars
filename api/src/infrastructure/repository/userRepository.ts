import { PrismaClient, User } from '@prisma/client'
import UserCreateTO from '../../model/dtos/user/UserCreateTO';

const prisma = new PrismaClient()

async function findByUsernameOrEmail(username: string, email: string): Promise<User | null> {
  return await prisma.user.findFirst({
    where: {
      OR: {
        username: {
          equals: username,
        },
        email: {
          equals: email,
        }
      }
    }
  });
}

async function create(user: UserCreateTO): Promise<User> {
  try {
    return await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        username: user.username,
        password: user.password,
        role: user.role.toString(),
        active: user.active
      }
    });
  } catch (e) {
    await prisma.$disconnect();
    throw new Error('Unexpected error');
  }
}

export default { create, findByUsernameOrEmail };