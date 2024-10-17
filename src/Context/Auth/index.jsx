import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({
    password: null,
    username: null,
  });

  useEffect(() => {
    const localPassword = localStorage.getItem("password");
    const localUsername = localStorage.getItem("username");

    if (localPassword && localUsername) {
      setAuthData({ password: localPassword, username: localUsername });
    }
  }, []);

  const login = (password, username) => {
    localStorage.setItem("password", password);
    localStorage.setItem("username", username);
    setAuthData({ password, username });
  };
  const logout = () => {
    localStorage.removeItem("password");
    localStorage.removeItem("username");
    setAuthData({ password: null, username: null });
  };
const isAuthenticated = () => {
  if (authData.password && authData.username) {
     return true
    }
  return false;
}
  return (
    <AuthContext.Provider value={{ authData, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
