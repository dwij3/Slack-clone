//hooks
import { useEffect, useState } from "react";

const STATUS = {
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  LOADING: "LOADING",
};

type statusProps = {
  state: string;
  data: any;
};

export const useQuery = (
  asyncFunc: (asyncFuncParams: string) => Promise<string>,
  asyncFuncParams: string,
  skip: boolean
) => {
  const [status, setStatus] = useState<statusProps>({
    state: STATUS.LOADING,
    data: null,
  });

  useEffect(() => {
    if (skip) return;
    asyncFunc(asyncFuncParams)
      .then((json) => {
        setStatus((status) => {
          return {
            ...status,
            state: STATUS.SUCCESS,
            data: json,
          };
        });
      })
      .catch(() => {
        setStatus((status) => {
          return { ...status, state: STATUS.ERROR };
        });
      });
  }, [skip, asyncFuncParams, asyncFunc]);

  return {
    data: status.data,
    loading: status.state === STATUS.LOADING,
    error: status.state === STATUS.ERROR,
  };
};
