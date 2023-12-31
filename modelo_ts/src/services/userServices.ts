import prisma from "../database/PrismaClient";

export class userServices {
  
  async list() {
    const users = await prisma.user.findMany();

    return users;
  }

  async create(name: string, email: string, password: string) {
    
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password
      },
    });

    return user;
  }

  async update(id: string, name: string, email: string, password: string) {
    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        name,
        email,
        password
      },
    });

    return user;
  }

  async delete(id: string) {
    await prisma.user.delete({
      where: {
        id,
      },
    });

    return { message: "User deleted successfully" };
  }

}
