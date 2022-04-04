import { useState, useEffect } from "react";

export const useRequest = (params) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const requestHandler = async () => {
      try {
        const request = await fetch(
          `https://jsonplaceholder.typicode.com/${params}`
        );
        const response = await request.json();
        setData(response);
      } catch (error) {
        console.log(error);
      }
    };
    requestHandler();
  }, [params]);

  return {
    data,
  };
};
