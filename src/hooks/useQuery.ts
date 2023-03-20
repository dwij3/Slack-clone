//hooks
import { useEffect, useState } from "react";
import { STATUS } from "../constants";
import { NewMessage } from "../types/types";

type statusProps = {
  status: string;
  data: any;
  error: Error | null;
};

export const useQuery = (
  asyncFunc: (asyncFuncParams: string) => Promise<Response>,
  asyncFuncParams: string,
  skip: boolean
) => {
  const [state, setState] = useState<statusProps>({
    status: STATUS.IDLE,
    data: null,
    error: null,
  });

  useEffect(() => {
    //to ignore network request
    let ignore = false;
    if (skip || ignore) return;
    setState((state) => {
      return {
        ...state,
        status: STATUS.LOADING,
      };
    });
    asyncFunc(asyncFuncParams)
      .then((response) => {
        if (!response.ok) {
          setState((state) => {
            return {
              ...state,
              error: new Error("Error from backend"),
            };
          });
          throw new Error();
        }
        return response.json();
      })
      .then((json) => {
        setState((state) => {
          return {
            ...state,
            status: STATUS.SUCCESS,
            data: json,
          };
        });
      })
      .catch(() => {
        setState((state) => {
          return {
            ...state,
            status: STATUS.ERROR,
            error: new Error("Can't fetch the data"),
          };
        });
      });
    console.log("jkp");
    return () => {
      ignore = true;
    };
  }, [skip, asyncFuncParams, asyncFunc]);

  const updateQuery = (newMessage: NewMessage) => {
    setState((state: statusProps) => {
      return {
        ...state,
        status: STATUS.SUCCESS,
        data: {
          ...state.data,
          messages: [...state.data.messages, newMessage],
        },
      };
    });
  };

  return {
    data: state.data,
    loading: state.status === STATUS.LOADING,
    error: state.error,
    updateQuery,
  };
};
