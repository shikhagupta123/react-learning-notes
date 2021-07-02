import React from "react";

function Card(props) {
  return (
    <div className="card">
      <h1> {props.name} </h1>
      <img src={props.img} alt="img" />
      <p>{props.email}</p>
    </div>
  );
}

export default Card;
