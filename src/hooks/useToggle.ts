import { useCallback, useState } from "react";

export const useToggle = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  const toggleHandler = useCallback((val: boolean) => {
    setIsCollapsed(val);
  }, []);
  return { isCollapsed, toggleHandler };
};
