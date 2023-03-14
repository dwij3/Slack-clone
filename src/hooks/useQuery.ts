//hooks
import { useEffect, useState } from "react";

export const useQuery = (url:string) => {
  const [data , setData] = useState<any>(null);
  const [loading,setLoading] = useState<boolean>(true);
  const [error,setError] = useState<boolean>(false);

  useEffect(() => {
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
      .catch(()=>{
        setLoading(false);
        setError(true);
        setData(null)
      });
  }, [url]);

  return { data ,loading , error  };
};
