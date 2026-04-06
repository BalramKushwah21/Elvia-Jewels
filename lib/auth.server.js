import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const SECRET = process.env.JWT_SECRET;

export function signToken(user) {
  return jwt.sign(
    {
      id: user.id,
      name: user.name,
      role: user.role,
    },
    SECRET,
    { expiresIn: "7d" }
  );
}


export async function getUserFromToken() {
  try {
    const cookieStore = await cookies(); 
    const token = cookieStore.get("token")?.value;
    if (!token) return null;
    return jwt.verify(token, SECRET);
  } catch {
    return null;
  }
}