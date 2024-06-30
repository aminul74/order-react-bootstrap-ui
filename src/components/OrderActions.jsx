// import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { CiSquareRemove, CiFilter } from "react-icons/ci";
import { RiMenuSearchLine } from "react-icons/ri";
const OrderActions = () => {
  return (
    <Container className="custom-inner-color mt-4 text-bold rounded">
      <Row className="p-2">
        <Col className="d-flex justify-content-start">
          <Form.Check aria-label="option 1" className="ml-2" />
          <p className="ml-2">0 item selected</p>
        </Col>
        <Col className="d-flex justify-content-between">
          <Button variant="rounded border" className="bg-white">
            <CiSquareRemove className="mx-2" />
            Remove
          </Button>
          <Button variant="rounded border" className="bg-white">
            <CiFilter className="mx-2" />
            Add Filter
          </Button>
          <Button variant="rounded border" className="bg-white">
            <RiMenuSearchLine className="mx-2" />
            View History
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderActions;
