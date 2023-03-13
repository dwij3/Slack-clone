import { createContext, useContext } from "react";
import { childrenProps } from "./type";

const UserContext = createContext<null | number>(null);

export const useUserId = (): number => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("Context Not provided");
  } else {
    return context;
  }
};

const UserContextProvider = ({ children, value }: childrenProps) => {
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
