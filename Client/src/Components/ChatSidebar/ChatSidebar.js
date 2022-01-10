import React from "react";
import ChatMessage from "./ChatMessage";
import "../../Layout/MainContent.css";

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
      <ChatMessage message={message} />
      <form onSubmit={sendMessage} className="mt-3 d-flex flex-row">
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
