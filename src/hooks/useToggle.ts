import { useCallback, useState } from "react";

export const useToggle = (toggleValue:boolean) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(toggleValue);

  const toggleHandler = useCallback((val: boolean) => {
    setIsCollapsed(val);
  }, []);
  return { isCollapsed, toggleHandler };
};
