import React from "react";
import { Card, Col, ListGroup } from "react-bootstrap";
import OnHoverScrollContainer from "../Components/CostumScrollBar/CostumScrollDiv";

export default function FriendsList() {
  return (
    <Col
      className="center-content shadow-lg pt-2 text-white"
      xs={10}
      md={8}
      lg={7}
    >
      <OnHoverScrollContainer>
        <h1>Work In Progress</h1>
        <h4>In the meanwhile you can go out-side and enjoy the weather</h4>
        <h5>(something I didn't do because of the hackathon...)</h5>
        <img
          className="mt-2"
          src="https://copyrightlately.com/wp-content/uploads/2020/11/Graphic-for-Nirvana-Post.png"
          style={{ height: "480px", width: "700px" }}
        />
      </OnHoverScrollContainer>
    </Col>
  );
}
