import React from "react";
import { Card, Col, Row, Form, Button } from "react-bootstrap";
import OnHoverScrollContainer from "../Components/CostumScrollBar/CostumScrollDiv";

export default function settings() {
  return (
    <Col
      className="center-content d-flex justify-content-center shadow-lg pt-2 text-white"
      xs={10}
      md={8}
      lg={7}
    >
      <OnHoverScrollContainer>
        <Form className="w-75">
          <h2 className=" ">Settings</h2>
          <Form.Group as={Row} className="" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              <h5>Language</h5>
            </Form.Label>
            <Col sm="10" className="d-flex flex-row justify-content-end">
              <Form.Select
                className="ms-5  w-25 "
                aria-label="Default select example"
              >
                <option value="1">English(en)</option>
                <option value="2">Hebrew(he)</option>
                <option value="3">Deutsch(de)</option>
                <option value="4">Italiano(it) </option>
              </Form.Select>
            </Col>
            <Form.Label row sm="2" className=" d-flex">
              <p className="fs-6">
                Choose language - Changes will be applied after restarting the
                app
              </p>
            </Form.Label>
          </Form.Group>
          <Form.Group
            as={Row}
            className="d-flex align-content-start mb-3"
            controlId="formPlaintextEmail"
          >
            <Form.Label row sm="2">
              <h5 className="d-flex flex-rownowrap">Explicit Content</h5>
            </Form.Label>
            <Row sm="10" className="d-flex flex-row justify-content-end">
              <Form.Label
                row
                sm="2"
                className=" d-flex justify-content-between"
              >
                <p className="fs-6">Allow playback of explicit-rated content</p>
                <Form.Check
                  checked={false}
                  type="switch"
                  id="custom-switch"
                  label=""
                />
              </Form.Label>
            </Row>
          </Form.Group>

          <Form.Group
            as={Row}
            className="d-flex align-content-start "
            controlId="formPlaintextEmail"
          >
            <Form.Label row sm="2">
              <h5 className="d-flex flex-rownowrap">Autoplay</h5>
            </Form.Label>
            <Row sm="10" className="d-flex flex-row justify-content-end">
              <Form.Label
                row
                sm="2"
                className=" d-flex justify-content-between"
              >
                <p className="fs-6">
                  Autoplay similiar podcasts when your podcast ends in this app
                </p>
                <Form.Check
                  checked={true}
                  type="switch"
                  id="custom-switch"
                  label=""
                />
              </Form.Label>
            </Row>
          </Form.Group>
          <Form.Group
            as={Row}
            className="d-flex align-content-start mb-3"
            controlId="formPlaintextEmail"
          >
            <Form.Label row sm="2">
              <h5 className="d-flex flex-rownowrap">Audio quality</h5>
            </Form.Label>
            <Row sm="10" className="d-flex flex-row justify-content-end">
              <Form.Label
                row
                sm="2"
                className=" d-flex justify-content-between"
              >
                <p className="fs-6">streaming quality</p>
                <Form.Select
                  className="ms-5 w-25 "
                  aria-label="Default select example"
                >
                  <option value="1">Automatic</option>
                  <option value="2">Low</option>
                  <option value="3">Normal</option>
                  <option value="4">High</option>
                  <option value="5">Very High</option>
                </Form.Select>
              </Form.Label>
            </Row>
          </Form.Group>
          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </OnHoverScrollContainer>
    </Col>
  );
}
