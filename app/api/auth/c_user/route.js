import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";

export async function GET() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return Response.json({ message: "Not logged in" }, { status: 401 });
  }

  try {
    const user = verifyToken(token);
    return Response.json({ user });
  } catch {
    return Response.json({ message: "Invalid token" }, { status: 401 });
  }
}