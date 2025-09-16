//fetchMovies
// fetchMovieDetails

// useFetch(fetchMovies)

import { useState } from "react";

const useFetch = <T>(fetchFunction: (args?: any) => Promise<T[]>) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const result = await fetchFunction();
      //@ts-ignore
      setData(result);
    } catch (err) {
      //@ts-ignore
      setError(
        err instanceof Error ? err : new Error("An unknown error occurred")
      );
    } finally {
      setLoading(false);
    }
  };
};
