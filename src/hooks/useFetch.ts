import React, { useEffect, useState, useContext } from "react";

const useFetch = (url: string) => {
  const [apiData, setApiData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setApiData(data);
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  return [apiData, isLoading];
};

export default useFetch;
