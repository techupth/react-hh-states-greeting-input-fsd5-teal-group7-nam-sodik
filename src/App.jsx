import { useState } from "react";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [message, setMessage] = useState("Greeting Message");
  return (
    <div className="App">
      <div className="greeting-container">{message}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          onChange={(event) => {
            setInputText(event.target.value);
          }}
          value={inputText}
        />
      </div>

      <div className="buttons">
        <button
          onClick={() => {
            setMessage(inputText === "" ? "Please Enter Text" : inputText);
          }}
        >
          Update text
        </button>

        <button
          onClick={() => {
            setMessage("Greeting Message");
          }}
        >
          Reset text
        </button>
      </div>
    </div>
  );
}

export default App;
