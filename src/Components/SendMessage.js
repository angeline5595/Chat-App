import React from "react";
import { useState } from "react";
import "../styles/App.css";
const SendMessage = ({change}) => {
  const [inputMessage, setInputMessage] = useState("");
  const sendMessage =()=>{
    console.log("inside send message",inputMessage);
    if(inputMessage!=="")
    {
      console.log("inside if send message");
    const postMessage = {message:inputMessage,author:"you"};
    fetch("https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/", {
      body: JSON.stringify(postMessage),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Token: "FGvviHC9KSai"
      },
      method: "POST"
    })
      .then(
        (result) => {
         console.log("result",result);
         setInputMessage('');
        },
        (error) => {
          console.log("error",error);
        }
      )
      setInputMessage('');
      change();
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
