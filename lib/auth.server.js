import { getServerSession } from "next-auth";
import { authOptions } from "./authOptions";

/**
 * 🔐 Require logged-in user
 */
export async function requireUser() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    throw new Error("UNAUTHORIZED");
  }

  return session;
}

/**
 * 👤 Get session (optional)
 */
export async function getUser() {
  const session = await getServerSession(authOptions);
  return session || null;
}

/**
 * 🛡️ Require admin user
 */
export async function requireAdmin() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    throw new Error("UNAUTHORIZED");
  }

  // 👉 Change this logic later (DB role-based)
  if (session.user.email !== "admin@gmail.com") {
    throw new Error("FORBIDDEN");
  }

  return session;
}