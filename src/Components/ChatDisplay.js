import React from "react";
import "../styles/App.css";
const ChatDisplay = () => {
  return (
    <div className="message">
      <div>
        <div className="message-content">
          <p>Author</p>
          <br />
          <p>message</p>
          <br />
          <p>time</p>
        </div>
      </div>
    </div>
  );
};
export default ChatDisplay;
