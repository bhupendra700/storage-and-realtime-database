import React from "react";
import ganesha from "../Images/lord-ganesha-HD.jpg";


const Card = () => {
  return (
    <>
      <div className="card">
        <img src={ganesha} alt="ganesha" />
        <div className="name">Name: Ganesha</div>
      </div>
    </>
  );
};

export default Card;


