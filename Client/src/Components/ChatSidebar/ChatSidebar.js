import React from "react";
import ChatMessage from "./ChatMessage";
import "../../Layout/MainContent.css";
import { Col } from "react-bootstrap";
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
    <Col
      className="message-center d-flex justify-content-between"
      xs={1}
      md={2}
      lg={3}
    >
      <div className="mt-3 ">
        <FontAwesomeIcon
          icon={faAngleLeft}
          style={{ cursor: "pointer" }}
          className="me-4 text-light"
          size="md"
        ></FontAwesomeIcon>
        Chatting with: @user123
      </div>
      <ChatMessage message={message} />
      <form
        onSubmit={sendMessage}
        className="my-2 d-flex flex-row justify-content-center"
      >
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something..."
          className="rounded me-2 w-75"
        />

        <button
          className="rounded bg-success border-0"
          type="submit"
          disabled={!formValue}
        >
          🕊️
        </button>
      </form>
      <main>
        <span></span>
      </main>
    </Col>
  );
}

export default ChatSidebar;
