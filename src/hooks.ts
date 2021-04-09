import { useState, useEffect, useRef } from "react";
import type { FetchResult } from "./types";

const cache = {};

export function useFetch<T>(...args: Parameters<typeof fetch>): FetchResult<T> {
  const [data, setData] = useState<T | undefined>();
  const [loading, setLoading] = useState(true);
  const url = args[0];

  useEffect(() => {
    // @ts-ignore
    if (url in cache) {
      // @ts-ignore
      setData(cache[url]);
      setLoading(false);
      return;
    }

    setLoading(true);
    fetch(...args)
      .then((response) => response.json())
      .then((jsonData) => {
        // @ts-ignore
        cache[url] = jsonData;
        setData(jsonData as T);
        setLoading(false);
      });
  }, [url]);

  if (loading) {
    return { loading, data: undefined };
  }

  return { loading, data: data as T };
}
