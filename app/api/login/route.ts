// import prisma from "@/prisma/prisma";
// import * as bcrypt from 'bcrypt'

// interface ReqBody {
//   username: string;
//   password: string;
// }

// export async function POST(req: Request) {
//   const body: ReqBody = await req.json();


//   const user = await prisma.user.findFirst({
//     where: {
//       email: body.username
//     }
//   })

//   if (user && (await bcrypt.compare(body.password, user.password))) {
//     const { password, ...userWithoutPass } = user

//     return new Response(JSON.stringify(userWithoutPass))
//   } else return new Response(JSON.stringify(null))
// }