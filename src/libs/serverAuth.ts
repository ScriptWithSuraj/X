import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";
import prisma from "@/libs/prismadb";
const serverAuth = async (req: NextApiRequest) => {
  const session = await getSession({ req });
  if (!session?.user?.email) throw new Error("Not signed in");
  const activeUser = await prisma.user.findUnique({
    where: { email: session.user.email },
  });
  if (!activeUser) throw new Error("Not signed in");
  return { activeUser };
};
export default serverAuth;
