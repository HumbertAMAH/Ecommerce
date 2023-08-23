import React from "react";

export default function Product(props) {
    const { name, url, price, description } = props;
  return (
    <div className="card">
      <img className="product--image" src={url} alt={name} />
      <h2>{name}</h2>
      <p className="price">{price}</p>
      <p>{description}</p>
      <p>
        <button>Add to Cart</button>
      </p>
    </div>
  );
}