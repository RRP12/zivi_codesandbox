import React from "react";
import Rating from "./Rating";
import "bootstrap/dist/css/bootstrap.min.css";

export default function RenderProducts({ products }) {
  console.log("Product prop:", products);

  return (
    <div className="container w-75 border border-dark p-3 mx-auto m-0 p-0 ">
      <ul className="list-unstyled d-flex flex-wrap">
        {products.map((p) => (
          <li className="w-25" key={p.id}>
            <div>
              <img className="img" src={p.image} alt={p.title} />
              <p>{p.title}</p>
              <p>{p.price}</p>
              <Rating rate={p.rating.rate}></Rating>
              <icon></icon>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
