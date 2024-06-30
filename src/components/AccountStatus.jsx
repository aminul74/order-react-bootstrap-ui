// import React from "react";
import { Table, Badge, Row, Col } from "react-bootstrap";
import { FaAmazon } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";

const AccountStatus = () => {
  return (
    <Table responsive className="pt-2">
      <thead >
        <tr>
          <th>Item ID</th>
          <th>QTY</th>
          <th>Price</th>
          <th>Fee/Tax</th>
          <th>Profit</th>
          <th>Estimated Arrival</th>
        </tr>
      </thead>
      <tbody style={{ fontSize: "0.80rem" }}>
        <tr>
          <td className="py-3">
            <Row xs="auto">
              <Col>
                <FaAmazon />
              </Col>
              <Col>
                <h6>
                  <Badge bg="secondary">BUY</Badge>
                </h6>
              </Col>
              <Col>
                <p className="font-weight-bold">54897894598</p>
              </Col>
            </Row>

            <Row xs="auto">
              <Col>
                <FaSackDollar />
              </Col>
              <Col>
                <h6>
                  <Badge bg="secondary">SELL</Badge>
                </h6>
              </Col>
              <Col>
                <p className="font-weight-bold">54897894598</p>
              </Col>
            </Row>
          </td>

          <td className="py-4 font-weight-bold">100000</td>

          <td className="py-3">
            <Row xs="auto">
              <Col>
                <h6>
                  <Badge bg="secondary">BUY</Badge>
                </h6>
              </Col>
              <Col>
                <p className="font-weight-bold">$167.00 - $170.90</p>
              </Col>
            </Row>

            <Row xs="auto">
              <Col>
                <h6>
                  <Badge bg="secondary">SELL</Badge>
                </h6>
              </Col>
              <Col>
                <p className="font-weight-bold">$167.00 - $170.90</p>
              </Col>
            </Row>
          </td>

          <td className="py-4 font-weight-bold">$500</td>
          <td className="py-4 font-weight-bold">$23.00</td>
          <td className="py-4 font-weight-bold">...</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default AccountStatus;
