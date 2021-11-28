import React from "react";
import "../styles/App.css";
const ChatDisplay = ({content,key}) => {
  if(content._id!=="61a21c5148c220001b5f6bef")//To avoid a wrongformat Data sent to api. 
            {
  return (
    <div className="message">
      <div>
        <div className="message-content">
          <p>{content.author}</p>
          <br />
          <p>{content.message}</p>
          <br />
          <p>{content.timestamp}</p>
        </div>
      </div>
    </div>
  );
}
return null;
};
export default ChatDisplay;
