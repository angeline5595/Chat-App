import React from "react";
import { useState } from "react";
import "../styles/App.css";
const SendMessage = ({ change }) => {
  const [inputMessage, setInputMessage] = useState("");
  // send Data to API
  const sendMessage = async () => {
    try {
      console.log("inside send message", inputMessage);
      if (inputMessage !== "") {
        console.log("inside if send message");
        const postMessage = { message: inputMessage, author: "you" };
        const response = await fetch(
          "https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/",
          {
            body: JSON.stringify(postMessage),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Token: "FGvviHC9KSai",
            },
            method: "POST",
          }
        );
        console.log("response", response.status);
        setInputMessage("");
        change();
      }
    } catch (err) {
      console.log(err);
      throw err;
    }
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
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};
export default SendMessage;
