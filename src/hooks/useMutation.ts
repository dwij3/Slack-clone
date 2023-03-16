import { useState } from "react";
const STATUS = {
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  LOADING: "LOADING",
};

export const useMutation = <TMutation>(url: string) => {
  const [status, setStatus] = useState(STATUS.LOADING);
  const mutate = async (payload: TMutation) => {
    await fetch(url, {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then(() => {
        setStatus(STATUS.SUCCESS);
      })
      .catch(() => {
        setStatus(STATUS.ERROR);
      });
  };

  return { mutate, status };
};
