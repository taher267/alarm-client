import { createContext, useContext } from "react";
import useFirebase from "./../../hooks/useFirebase";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const allContexts = useFirebase();
  return (
    <AuthContext.Provider value={allContexts}>{children}</AuthContext.Provider>
  );
}
