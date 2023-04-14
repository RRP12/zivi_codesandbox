import ReactStars from "react-rating-stars-component";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Rating({ rate }) {
  // const ratingChanged = ({ rate }) => {
  //   console.log({ rate });
  // };
  return (
    <>
      <ReactStars
        rating={rate}
        count={Math.floor(rate)}
        // onChange={ratingChanged}
        size={24}
        activeColor="#ffd700"
      />
      ,
    </>
  );
}
