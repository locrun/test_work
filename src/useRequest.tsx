import { useState, useEffect } from "react";

export const useRequest = (params: any) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const requestHandler = async () => {
      try {
        const request = await fetch(
          `https://jsonplaceholder.typicode.com/${params}`
        );
        const response = await request.json();
        setUsers(response);
      } catch (error) {
        console.log(error);
      }
    };
    requestHandler();
  }, [params]);

  return {
    users,
  };
};
