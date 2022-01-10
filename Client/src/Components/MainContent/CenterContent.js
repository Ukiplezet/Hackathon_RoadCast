import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col } from "react-bootstrap";

function CenterContent() {
  return (
    <Col
      className="center-content shadow-lg pt-2 mx-2 px-1 text-white "
      xs={10}
      md={8}
      lg={7}
    >
      <h1>Show data regarding the selected podcast</h1>
    </Col>
  );
}

export default CenterContent;
