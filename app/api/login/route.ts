import { connectToDatabase } from '@/db/mongodb';
import * as bcrypt from 'bcrypt'

interface ReqBody {
  email: string;
  password: string;
}

export async function POST(req: Request) {
  const { email, password }: ReqBody = await req.json();

  const db: any = await connectToDatabase()

  const user = await db.collection('users').findOne({ email })


  if (user && (await bcrypt.compare(password, user.password))) {
    const { password, ...userWithoutPass } = user

    return new Response(JSON.stringify(userWithoutPass))
  } else return new Response(JSON.stringify(null))
}