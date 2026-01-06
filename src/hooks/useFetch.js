import { useEffect, useState } from "react";

const useFetch = (fetchFn) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFn().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, [fetchFn]);

  return { data, loading };
};

export default useFetch;
