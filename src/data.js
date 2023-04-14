import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export function useProducts(params) {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setdata(json));
  }, []);

  return data;
}
