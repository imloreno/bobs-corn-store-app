import { dbBob } from "@/server/config/db";
import { LoginDTO } from "@server/types/dto/login";
import { User } from "@server/types/user";

export const createUserService = async (user: User) => {
  try {
    const request = await dbBob.user.create({
      data: user,
    });

    return request;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error creating user:", error.message);
    } else {
      console.error("Error creating user:", String(error));
    }
    throw new Error("Failed to create user");
  }
};

export const loginUserService = async (loginData: LoginDTO) => {
  try {
    const user = await dbBob.user.findFirst({
      where: {
        username: loginData.username,
        password: loginData.password,
      },
    });

    if (!user) {
      throw new Error("Invalid username or password");
    }

    return user;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error logging in user:", error.message);
    } else {
      console.error("Error logging in user:", String(error));
    }
    throw new Error("Failed to log in user");
  }
};
