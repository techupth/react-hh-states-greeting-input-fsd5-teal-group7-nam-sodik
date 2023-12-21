import "./App.css";
import { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function App() {
  const [greetingInputText, setGreetingInputText] = useState("");
  const [newGreetingMessage, setNewGreetingMessage] =
    useState("Greeting Message");
  return (
    <div className="App">
      <div className="greeting-container">{newGreetingMessage}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          onChange={(event) => {
            setGreetingInputText(event.target.value);
          }}
          value={greetingInputText}
        />
      </div>

      <div className="buttons">
        <button
          onClick={() => {
            setNewGreetingMessage(greetingInputText);
          }}
        >
          Update text
        </button>
      </div>
    </div>
  );
}

export default App;
