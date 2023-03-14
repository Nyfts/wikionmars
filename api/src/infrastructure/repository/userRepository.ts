import { PrismaClient, User } from '@prisma/client'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import RuntimeError from '../../application/errors/RuntimeError';
import UserCreateTO from '../../presentation/dtos/user/UserCreateTO';
import { PrismaErrors } from '../../presentation/enums/PrismaErrorsConstraints';

const prisma = new PrismaClient()

async function findByUsernameOrEmail(username: string, email: string): Promise<User | null> {
  return await prisma.user.findFirst({
    where: {
      OR: [
        {
          username: username
        },
        {
          email: email
        }
      ]
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
    if (e instanceof PrismaClientKnownRequestError) {
      if (e.code === PrismaErrors.UniqueConstraintError) {
        if (e.meta) {
          throw new RuntimeError(`Unique constraint failed: ${e.meta['target']}`);
        }
      }
      throw new Error('Uncaught prisma error: ' + e.message);
    }
    throw new Error();
  }
}

export default { create, findByUsernameOrEmail };