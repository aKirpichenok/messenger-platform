import dbConnect from '@/db/dbConnect';
import { UserModel } from '@/db/models/user.schema';
import { loginUser } from '@/db/services/userService';

export async function POST(req: Request) {

  const body = await req.json()

  const user = await loginUser(body)

  if (user) {
    const { _id } = user

    return new Response(JSON.stringify({ id: _id }));
  }

  return new Response(JSON.stringify({ message: 'Неверный логин или пароль' }), { status: 400 })


}