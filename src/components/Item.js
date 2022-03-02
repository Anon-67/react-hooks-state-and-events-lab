import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)
  function handleClick() {
    setInCart(inCart => !inCart)
  }


  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className={inCart ? "in-cart" : "add"}>{inCart ? "In Cart" : "Add To Cart"}</button>
    </li>
  );
}

export default Item;
