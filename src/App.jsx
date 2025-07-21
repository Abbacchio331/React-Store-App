import { useState } from "react";
import {ITEMS_TO_SELL} from "./data";
import RecentlyAdded from "./components/RecentlyAdded/RecentlyAdded"
import ItemToSell from "./components/ItemToSell/ItemToSell"
import TabButton from "./components/TabButton/TabButton"


export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  function displayMessage(message){
    setSelectedCategory(message)
  }

  return (
      <div>
          <RecentlyAdded/>
          <div id="tab-buttons">
              <ul>
                  <TabButton isClicked={selectedCategory === "electronics" && true} onClick={() => displayMessage("electronics")}>Electronics</TabButton>
                  <TabButton isClicked={selectedCategory === "tyres" && true} onClick={() => displayMessage("tyres")}>Tyres</TabButton>
                  <TabButton isClicked={selectedCategory === "books" && true} onClick={() => displayMessage("books")}>Books</TabButton>
                  <TabButton isClicked={selectedCategory === "clotheus" && true} onClick={() => displayMessage("clothes")}>Clothes</TabButton>
              </ul>
          </div>
          <div id="selling-section">
              {ITEMS_TO_SELL
              .filter(item => selectedCategory === "" ? true : item.itemType === selectedCategory)
              .map(item => (
                <ItemToSell key={item.itemTitle} {...item} />
              ))}
          </div>
      </div>
  );
}
