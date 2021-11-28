import React from "react";
import "../styles/App.css";
const ChatDisplay = ({ content, key }) => {
  // method to change the time format
  const addZero=(i)=> {
    if (i < 10) {i = "0" + i}
    return i;
  }

  const timeFormatchange = () => {
    let date = new Date(content.timestamp);
    let emptySpace = " ";
    let newDate =
      date.getDate() +
      emptySpace +
      date.toLocaleString("default", { month: "short" }) +
      emptySpace +
      date.getFullYear() +
      emptySpace +
      addZero(date.getHours()) +
      ":" +
      addZero(date.getMinutes());
    console.log("newDate", newDate);
    return newDate;
  };

  if (content._id !== "61a21c5148c220001b5f6bef") {
    //To avoid a wrongformat Data sent to api.
    return (
      <div
        key={key}
        className="message"
        id={content.author !== "you" ? "other" : "you"} 
        // added styles to sender and receiver 
      >
        <div className="message">
          <div>
            <div className="message-content">
              {content.author !== "you" ? (
                <p id="author">{content.author}</p>
              ) : null}
              <p>{content.message}</p>
              <br />
              <p id="time">{timeFormatchange()}</p> 
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
};
export default ChatDisplay;
