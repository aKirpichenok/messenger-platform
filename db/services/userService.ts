import dbConnect from "../dbConnect";
import { UserModel } from "../models/user.schema";
import type { IUserCreate, IUserCreateResponse, UserLogin } from "./userTypes";
import * as bcrypt from 'bcrypt';



export async function createUser(dto: IUserCreate): Promise<IUserCreateResponse | undefined> {

  await dbConnect()

  const { name, email, password, age } = dto

  try {
    const user = await UserModel.create({ name, email, password: await bcrypt.hash(password, 10), age, online: true })
    return user
  } catch (err) {

    console.log(err)
  }
}
export async function loginUser(dto: UserLogin): Promise<IUserCreateResponse | null> {

  await dbConnect()

  const { email, password } = dto

  try {
    const user = await UserModel.findOneAndUpdate({ email }, { online: true })
    const isEqualPass = await bcrypt.compare(password, user.password)

    return user && isEqualPass ? user : null
  } catch (err) {
    return null
  }
}

export async function userLogout(id: string): Promise<void> {
  await dbConnect()

  await UserModel.findByIdAndUpdate(id, { online: false })


}