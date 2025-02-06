import { useState, useEffect } from "react";

const useFetch = (url, options = {}) => {
  // Example Options
  // const options = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ name: 'John Doe' }),
  //   };
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error("Error fetching data");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]);

  return { data, loading, error };
};

export default useFetch;

/** Example Usage */

// const { data, loading, error } = useFetch("https://api.example.com/data");
// if (loading) return <p>Loading...</p>;
// if (error) return <p>{error}</p>;

// return <pre>{JSON.stringify(data, null, 2)}</pre>;
