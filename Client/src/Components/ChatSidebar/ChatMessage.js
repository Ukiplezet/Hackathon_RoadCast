import React from "react";
import "../../Layout/MessagesBoard.css";
function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = `hello there`;

  return (
    <div className="messages-board">
      <div className={`message ${messageClass}`}>
        <img
          src={
            photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
          }
        />
        <p>{text}</p>
      </div>
    </div>
  );
}

export default ChatMessage;
