import { User } from "@prisma/client";
import userRepository from "../../../infrastructure/repository/userRepository";
import UserCreateTO from "../../../model/dtos/user/UserCreateTO";
import AlreadyExistsError from "../../errors/AlreadyExistsError";

const create = async (user: UserCreateTO): Promise<User> => {
  const existingUser = await userRepository.findByUsernameOrEmail(user.username, user.email);

  // if (existingUser?.email === user.email) {
  //   throw new AlreadyExistsError('This email is not available');
  // }

  // if (existingUser?.username === user.username) {
  //   throw new AlreadyExistsError('This username is not available');
  // }

  return await userRepository.create(user);
}

export default { create };