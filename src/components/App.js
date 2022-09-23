import React from "react";
import { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // defining the set to be used when creating the shopping lists
const [items, setItems] = useState(itemData);
// creating a state variable that can be toggled between true and false
const [darkMOde, setDarkMOde] = useState(false);

  const darkModeClick = () => {
    setDarkMOde((darkMOde) => !darkMOde);
  }

  // this will be used for the Dark Mode Toggle feature
  const appClass = (darkMOde ? "App dark" : "App light")

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={darkModeClick}>{appClass} Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
