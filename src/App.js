import React, { useState, useEffect } from "react";
import ChatDisplay from "./Components/ChatDisplay";
import SendMessage from "./Components/SendMessage";
import ScrollToBottom from "react-scroll-to-bottom";
import "./styles/App.css";
const App = () => {
  const [data, setData] = useState([]);
  const[length,setLength]=useState(0);
// To rerender when data is posted to api
  const onChange=()=>{
    console.log("inside onChange ");
    setLength(0);
  }
  // Data fetch from url
  useEffect(() => {
    fetch("https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Token: "FGvviHC9KSai",
      },
      method: "GET",
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("result", result);
          setData(result);
          setLength(result.length);
        },
        (error) => {
          console.log("error", error);
        }
      );
  }, [length]);

  return (
    <div className="chat-window">
      <div className="chat-header">
        <p>ChatApp</p>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {data.map((messageContent, id) => {
            return <ChatDisplay key={id} content={messageContent} />;
          })}
        </ScrollToBottom>
      </div>
      <SendMessage change={onChange}/>
    </div>
  );
};

export default App;
