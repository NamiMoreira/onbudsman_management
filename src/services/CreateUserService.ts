const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

import { hash } from "bcryptjs";

interface UserRequest {
  name: string;
  email: string;
  password: string;
  role: number;
  username: string;
}

class CreateUserService {
  async execute({ name, email, password, role,  }: UserRequest) {

    if (!email) {
      return {logError: 1, status: 400, error: "Email incorreto!" };
    }
    const userAlreadyExists = await prisma.user.findFirst({
      where: {
        email: email,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
    if (userAlreadyExists) {
        return {logError: 1,  status: 406, error: "Email já existe!" };
    }
    const passwordHash = await hash(password, 8);

    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHash,
        role: role
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
    return user;
  }
}

export { CreateUserService };
