import { CreateUserDto } from "@/dtos/users.dto";
import { UserModel } from "@/models/users.model";

export const createUser = async (data: CreateUserDto) => {
  await UserModel.query().insert(data)
  return await UserModel.query().findOne({ email: data.email })
}
