import { useState } from "react";
import { STATUS } from "../constants";

type statusProps = {
  status: string;
  data: any;
  error: Error | null;
};

export const useMutation = <TMutation>(url: string, config: any) => {
  const [state, setState] = useState<statusProps>({
    status: STATUS.IDLE,
    data: null,
    error: null,
  });

  const mutate = async (payload: TMutation) => {
    setState((state) => {
      return {
        ...state,
        status: STATUS.LOADING,
      };
    });
    await fetch(url, {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          setState((state) => {
            return {
              ...state,
              status: STATUS.ERROR,
              error: new Error("Error from backend"),
            };
          });
          throw new Error();
        }
        return response.json();
      })
      .then((response) => {
        config?.onSuccess?.(response);
        setState((state) => {
          return {
            ...state,
            data: response,
            status: STATUS.SUCCESS,
          };
        });
      })
      .catch(() => {
        setState((state) => {
          return {
            ...state,
            status: STATUS.ERROR,
            error: new Error("cant' mutate data"),
          };
        });
      });
  };

  return {
    mutate,
    newData: state.data,
    status: state.status,
    loading: state.status === STATUS.LOADING,
    error: state.status === STATUS.ERROR,
  };
};
