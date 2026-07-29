import { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext(null);

const SESSION_KEY = "shipnow-session";

export function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(
    () => localStorage.getItem(SESSION_KEY) === "active"
  );

  const login = ({ email, password }) => {
    const ok =
      email.trim().toLowerCase() === "sadib@shipnow.com" &&
      password === "1234";

    if (ok) {
      localStorage.setItem(SESSION_KEY, "active");
      setAuthenticated(true);
    }

    return ok;
  };

  const logout = () => {
    localStorage.removeItem(SESSION_KEY);
    setAuthenticated(false);
  };

  const value = useMemo(
    () => ({ authenticated, login, logout }),
    [authenticated]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
}
