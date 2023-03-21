//libs
import { createContext, useContext } from "react";

//type
import { UserContextProviderProps } from "../../types/types";

const UserContext = createContext<string | null>(null);

export const useUserId = (): string => {
  const context = useContext(UserContext);

  if (context) return context;
  throw new Error("Consumers must be wrapped with context provider");
};

export const UserContextProvider = ({
  children,
  value,
}: UserContextProviderProps) => {
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
