import React from "react";

const BookCard = (props) => {
  return (
    <div className="card-container">
      <img src={props.image} alt="" />
      <div className="desc" style={{ width: '25rem' }}>
        <h2 style={{color:"blue"}}>{props.title}</h2>
        <h3 style={{color:"red"}}>Author:{props.author}</h3>
        <p  style={{color: "orange"}}>Published Date:{props.published}</p>
      </div>
    </div>
  );
};

export default BookCard;