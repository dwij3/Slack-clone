//hooks
import { createContext, useContext } from "react";

//type
import { UserContextProviderProps } from "./type";

const UserContext = createContext<null | number>(null);

export const useUserId = (): number => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("Context Not provided");
  } else {
    return context;
  }
};

const UserContextProvider = ({ children, value }: UserContextProviderProps) => {
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
