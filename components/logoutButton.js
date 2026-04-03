"use client";

export default function LogoutButton() {
  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      // redirect after logout
      window.location.href = "/auth/login";
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        margin: "auto",
        padding: "10px 20px",
        background: "skyblue",
        color: "black",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontWeight: "bold", 
      }}
    >
      Logout
    </button>
  );
}