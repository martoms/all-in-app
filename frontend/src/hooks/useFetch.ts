import { useState, useEffect } from "react";

type FetchResult<T> = {
  error: string | null;
  isPending: boolean;
  data?: T;
};

const useFetch = <T>(url: string): FetchResult<T> => {
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [data, setData] = useState<T | undefined>();

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error('There seems to be a problem fetching data.');
        } else {
          return res.json();
        }
      })
      .then((result) => {
        setIsPending(false);
        setError(null);
        setData(result);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });

    return () => abortCont.abort();
  }, [url]);

  return { error, isPending, data };
};

export default useFetch;
