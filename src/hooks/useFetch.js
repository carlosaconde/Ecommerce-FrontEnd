import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export const useFetch = (url) => {
  const [resp, setResp] = useState([]);

  try {
    const getFetch = async () => {
      const { data } = await axios.get(url);
    //   console.log(data);
      setResp(data);
    };
    useEffect(() => {
      getFetch();
    
    },[]);
  } catch (error) {
    console.log(error);
  }

  return resp;
};
