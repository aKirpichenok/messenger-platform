import { userLogout } from "@/db/services/userService"



export async function PUT(req: Request) {

  const { id } = await req.json()

  await userLogout(id)
}