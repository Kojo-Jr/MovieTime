import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const signIn = () => {
    setLoading(true);

    setTimeout(() => {
      setUser(true);
      setLoading(false);
    }, 1000);
  };
  const signOut = () => {
    setLoading(true);

    setTimeout(() => {
      setUser(false);
      setLoading(false);
    }, 1000);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
