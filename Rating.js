import ReactStars from "react-rating-stars-component";
import React from "react";

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
