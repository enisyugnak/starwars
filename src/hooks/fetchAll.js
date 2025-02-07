import { useEffect, useState } from "react";

const useFetchAll = (urls) => {
  // Server  Data fetched in 0.211 seconds.
  //const memoizedOptions = useMemo(() => options, [options]);
  const fetchOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetcAllUrls = async () => {
      setLoading(true);
      setError(null);
      try {
        const fetchPromises = urls.map((url) =>
          fetch(url, fetchOptions).then((res) => res.json()),
        );
        const result = await Promise.all(fetchPromises);

        setData([].concat(...result));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetcAllUrls();
  }, [urls]);

  return { data, loading, error };
};

export default useFetchAll;
