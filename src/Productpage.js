import React, { useEffect } from "react";
import { useContext, useRef, useState } from "react";
import { MyContext } from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./Product";

let Productfilter = ({ product }) => {};

export default function Productpage() {
  let value = useContext(MyContext);

  return (
    <div>
      <Productfilter product={value}></Productfilter>
      <Product product={value}></Product>
    </div>
  );
}
