import React, { useEffect, useRef, useState } from "react";
import { MyContext } from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import RenderProducts from "./RenderProducts";

export default function Product({ product }) {
  const [products, setProducts] = useState([...product]);
  const [checked, setChecked] = React.useState(false);
  const checkbox = useRef();
  const [search, setsearch] = React.useState("");

  useEffect(() => {
    setProducts([...product]);
  }, [product]);

  const handleClick = (e) => {
    setChecked((old) => !old);
  };

  const filteredProducts = checked
    ? products.filter((p) => p.price > 500)
    : products;

  let filtersearch = filteredProducts.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );
  console.log("filtersearch", filtersearch);
  let handelsearch = (e) => {
    setsearch(e.target.value);
  };

  return (
    <div className="d-flex flex-column  justify-content-between  ">
      <div className="mx-auto  mt-5 mb-5 ">
        <input
          className="nosubmit"
          placeholder="Search...."
          onChange={handelsearch}
          value={search}
          id="input"
          type="search"
        />
      </div>

      <div className="d-flex flex-row ">
        <div className="d-flex flex-column gap-5">
          <div>
            <p className="fs-6 border">PRICE RANGE</p>
            <div>
              <input
                onChange={handleClick}
                checked={checked}
                type="checkbox"
                id="under500"
                ref={checkbox}
              />
              <label htmlFor="under500">under 500</label>
            </div>

            <div>
              <input type="checkbox" id="1000_to_3000" />
              <label htmlFor="1000_to_3000">1000_to_3000</label>
            </div>
          </div>
          <div>
            <p className="fs-6 border">RATING</p>
            <div>
              <input
                onChange={handleClick}
                checked={checked}
                type="checkbox"
                id="under500"
                ref={checkbox}
              />
              <label htmlFor="under500">under 500</label>
            </div>

            <div>
              <input type="checkbox" id="1000_to_3000" />
              <label htmlFor="1000_to_3000">1000_to_3000</label>
            </div>
          </div>
        </div>
        <div>
          <RenderProducts products={filtersearch} />
        </div>
      </div>
    </div>
  );
}
