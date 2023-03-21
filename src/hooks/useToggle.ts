//libs
import { useCallback, useState } from "react";

export const useToggle = (toggleValue: boolean) => {
  const [state, setState] = useState<boolean>(toggleValue);

  const toggleHandler = useCallback((val: boolean) => {
    setState(val);
  }, []);
  return { state, toggleHandler };
};
