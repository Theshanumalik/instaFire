import { createContext, useContext, useState } from "react";
import { auth } from "../firbase";

export const authContext = createContext();
export const useAuth = () => useContext(authContext);
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  auth.onAuthStateChanged(async (user) => {
    setCurrentUser(user);
  });
  return (
    <authContext.Provider value={{ currentUser }}>
      {children}
    </authContext.Provider>
  );
};
