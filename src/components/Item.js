import React from "react";
import {useState} from "react";

function Item({ name, category }) {
  //Add state for the button
  const [inTheCart, setInTheCart] = useState(false);

  const clickAddToCat = () =>{
    setInTheCart((inTheCart) =>!inTheCart);
  }
  

  return (
    <li className={inTheCart ? "in-cart" : "" }>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inTheCart ? "remove" : "add"} 
      onClick={clickAddToCat}>{inTheCart ? "Remove From" : "Add to"} Cart</button>
    </li>
  );
}

export default Item;
