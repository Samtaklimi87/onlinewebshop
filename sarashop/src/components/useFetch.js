import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState({ data: null, loading: true });

  useEffect(() => {
    setData({ data: data.data, loading: true });
    fetch(url)
      .then((response) => response.text())
      .then((stringtoprintpout) => {
        setData({ data: stringtoprintpout, loading: false });
        console.log(stringtoprintpout);
      });
  }, [url, setData]);
  return data;
};
