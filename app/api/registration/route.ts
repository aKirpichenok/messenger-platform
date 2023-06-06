import dbConnect from '@/db/dbConnect';
import { UserModel } from '@/db/models/user.schema';
import { createUser } from '@/db/services/userService';
export async function POST(req: Request) {

  const body = await req.json()

  await dbConnect()

  const isExestingUser = await UserModel.findOne({ email: body.email })
  if (isExestingUser) {
    return new Response(JSON.stringify({ message: 'Этот email уже занят' }), { status: 400 })
  }

  const user = await createUser(body)

  if (user) {
    const { _id } = user

    return new Response(JSON.stringify({ id: _id }));
  }


}