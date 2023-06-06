import { connectToDatabase } from '@/db/mongodb';
import * as bcrypt from 'bcrypt'

interface ReqBody {
  name: string;
  email: string;
  password: string;
}

export async function POST(req: Request) {

  const { name, email, password }: ReqBody = await req.json()

  const db: any = await connectToDatabase()

  const isExestingUser = await db.collection('users').findOne({ email })
  if (isExestingUser) {
    return new Response(JSON.stringify({ message: 'User with this email already exists' }));
  }


  const user = await db.collection('users').insertOne({
    name: name,
    email: email,
    password: await bcrypt.hash(password, 10),
    adressId: 'some adress'
  })


  return new Response(JSON.stringify(user.insertedId));
}