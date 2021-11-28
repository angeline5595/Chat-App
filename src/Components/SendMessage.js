import React from "react";
import { useState } from "react";
import "../styles/App.css";
const SendMessage = () => {
  const [inputMessage, setInputMessage] = useState("");
  const sendMessage = () => {
    console.log("send Message");
  };
  return (
    <div className="chat-footerhead">
      <div className="chat-footer">
        <input
          type="text"
          value={inputMessage}
          placeholder="Message"
          onChange={(event) => {
            setInputMessage(event.target.value);
          }}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};
export default SendMessage;
