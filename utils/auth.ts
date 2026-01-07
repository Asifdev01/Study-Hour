// utils/auth.ts

export const getToken = () => {
  if (typeof window === "undefined") return null;

  return (
    localStorage.getItem("token") ||
    sessionStorage.getItem("token")
  );
};

export const logout = () => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
};
