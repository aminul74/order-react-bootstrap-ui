// import React from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const SearchOrders = () => {
  return (
    <Container className="text-bold">
      <Row>
        <Col className="d-flex justify-content-start">Total 6 orders</Col>
        <Col>
          <Form inline className="my-2 my-lg-0 b col-md-12">
            <div className="input-group">
              <FormControl
                type="search"
                placeholder="Search anything..."
                className="custom-inner-color"
                aria-label="Search"
              />
              <div className="input-group-append">
                <Button
                  type="submit"
                  variant="danger"
                  className="text-white rounded"
                >
                  <FaSearch className="color-blue mr-2" /> Search
                </Button>
              </div>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchOrders;
