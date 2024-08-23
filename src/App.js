import React, { useState} from "react";
import "./App.css";

function App() {
  const [expandedItem, setExpandedItem] = useState(null);
  

  const handleItemClick = (item) => {
    setExpandedItem(item === expandedItem ? null : item);
  };

  return (
    <div className="masonry" >
      <div
        className={`item item1 ${expandedItem === "A" ? "expanded" : ""}`}
        onClick={() => handleItemClick("A")}
      >
        A
      </div>
      <div className="item item2">B</div>
      <div className="item item3">C</div>
      <div className="item item4">D</div>
      <div className="item item5">E</div>
      <div className="item item6">F</div>
      <div className="item item7">G</div>
      <div className="item item8">H</div>
      <div className="item item9">I</div>
      <div className="item item10">J</div>
      <div className="item item1">K</div>
      <div className="item item2">L</div>
      <div className="item item3">M</div>
      <div className="item item4">N</div>
      <div className="item item5">O</div>
      <div className="item item6">P</div>
      <div className="item item7">Q</div>
      <div className="item item8">R</div>
      <div className="item item9">S</div>
      <div className="item item10">T</div>
      <div className="item item1">U</div>
      <div className="item item2">V</div>
      <div className="item item3">W</div>
      <div className="item item4">X</div>
      <div className="item item5">Y</div>
      <div className="item item6">Z</div>
    </div>
  );
}

export default App;
