import { useState, useEffect } from "react";

const useFetch = url => {
  const [data, setData] = useState(null);
  const [isPending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw Error("Server error");
        }

        return res.json();
      })
      .then(data => {
        setError(null);
        setData(data);
        setPending(false);
      })
      .catch(ex => setError(ex.message))
      .finally(() => setPending(false));
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
