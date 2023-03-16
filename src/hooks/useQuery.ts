//hooks
import { useEffect, useState } from "react";

// state : success , error , loading

export const useQuery = (url: string, skip: boolean) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (skip) return;
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            setLoading(false);
            setError(true);
            return;
          }
          return response.json();
        })
        .then((json) => {
          setLoading(false);
          setError(false);
          setData(json);
        })
        .catch(() => {
          setLoading(false);
          setError(true);
          setData(null);
        });
  }, [skip, url]);

  return { data, loading, error };
};
