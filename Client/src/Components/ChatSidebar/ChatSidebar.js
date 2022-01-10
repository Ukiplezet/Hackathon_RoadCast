import React from "react";
import ChatMessage from "./ChatMessage";
import "../../Layout/MainContent.css";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useContext, useState } from "react";
function ChatSidebar() {
  const [formValue, setFormValue] = useState("");
  const message = {
    text: formValue,
  };
  const sendMessage = async (e) => {
    e.preventDefault();
    console.log(formValue);

    setFormValue("");
  };
  return (
    <div className="message-center pt-2 me-2">
      <div>
        <FontAwesomeIcon
          icon={faAngleLeft}
          style={{ cursor: "pointer" }}
          className="me-4 mt-1 text-light"
          size="md"
        ></FontAwesomeIcon>
        Chatting with: @user123
      </div>
      <ChatMessage message={message} />
      <form onSubmit={sendMessage} className="my-3 d-flex flex-row">
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something..."
          className="rounded mx-3 w-75"
        />

        <button
          className="rounded bg-primary border-0"
          type="submit"
          disabled={!formValue}
        >
          🕊️
        </button>
      </form>
      <main>
        <span></span>
      </main>
    </div>
  );
}

export default ChatSidebar;
