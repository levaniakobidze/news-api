import React, { useEffect, useState, useContext } from "react";

const useFetch = (url: string) => {
  const [apiData, setApiData] = useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setApiData(data);
    };
    fetchData();
  }, [url]);

  return [apiData];
};

export default useFetch;
