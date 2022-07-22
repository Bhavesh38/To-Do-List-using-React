import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  
  function handleChange(event) {
    const newText = event.target.value;
    setInputText(newText);
  }

  function itemAdded() {
    setItems((prevValue) => {
      return [...prevValue, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button type="submit" onClick={itemAdded}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => <li>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
