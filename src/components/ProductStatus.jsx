// import React from "react";
import { Container, Row, Col, Form, Image, Badge } from "react-bootstrap";
import AccountStatus from "./AccountStatus";
const ProductStatus = () => {
  return (
    <Container className="mt-2">
      <Row className="border border-2 rounded">
        <Col md={4} className="pt-3">
          <Row className="border-bottom">
            <Col>
              <h6 className="font-weight-bold">Name</h6>
            </Col>
            <Col>
              <h6 className="font-weight-bold">Status</h6>
            </Col>
          </Row>
          {/*  */}
          <Row className="border-bottom">
            <Col md={8}>
              <div className="d-flex justify-content-between m-2">
                <Form.Check aria-label="option" className="mt-4 ml-2" />
                <Image
                  src="../src/assets/product.jpg"
                  style={{ height: "80px", width: "60px", marginLeft: "6px" }}
                  alt="Product"
                />
                <p className="text-left pl-2 font-weight-bold">
                  Meta Quest 2-
                  <br /> Advance All-In- One virtual Reality Headest
                </p>
              </div>
            </Col>
            <Col md={4}>
              <h6>
                <Badge bg="success" className="mt-4 text-black-50">
                  Delivered
                </Badge>
              </h6>
            </Col>
          </Row>
          {/* Row status continuing....*/}
          <Row>
            <Col md={8}>
              <div className="d-flex justify-content-between m-2">
                <Form.Check aria-label="option" className="mt-4 ml-2" />
                <Image
                  src="../src/assets/product.jpg"
                  style={{ height: "80px", width: "60px", marginLeft: "6px" }}
                  alt="Product"
                />
                <p className="text-left font-weight-bold pl-2">
                  Meta Quest 2-
                  <br /> Advance All-In- One virtual Reality Headest
                </p>
              </div>
            </Col>
            <Col md={4}>
              <h5>
                <Badge bg="warning" className="mt-4 text-black-50">
                  Pending
                </Badge>
              </h5>
            </Col>
          </Row>
        </Col>
        {/* Account Status */}
        <Col md={8} className="bg-white">
          <AccountStatus />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductStatus;
