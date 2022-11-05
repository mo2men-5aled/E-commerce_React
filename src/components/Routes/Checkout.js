import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

import Text from "../Text";
import { Row } from "react-bootstrap";
const Checkout = () => {
  return (
    <div className="container">
      <Text message="Checkout" />
      <div className="card p-3">
        <h2 style={{ textAlign: "center" }}>Addess</h2>
        <Form.Group as={Col} className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Type your Email" />
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationFormik01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              placeholder="First name"
            />
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationFormik02">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" name="lastName" placeholder="Last name" />
          </Form.Group>
        </Row>
        <Form.Group as={Col} className="mb-3">
          <Form.Label>Company</Form.Label>
          <Form.Control type="text" placeholder="Type your Company" />
        </Form.Group>
        <Form.Group as={Col} className="mb-3">
          <Form.Label>Street Address</Form.Label>
          <Form.Control type="text" placeholder="Type your address" />
        </Form.Group>
        <Form.Group as={Col} className="mb-3">
          <Form.Label>Country</Form.Label>
          <Form.Control type="text" placeholder="insert your country" />
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationFormik01">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Type your City" />
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationFormik02">
            <Form.Label>Postal Code</Form.Label>
            <Form.Control type="text" placeholder="Postal ZIP code" />
          </Form.Group>
        </Row>
        <Form.Group as={Col} className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="number" placeholder="Type your Phone" />
        </Form.Group>
      </div>

      <div className="card p-3 mt-5">
        <h2 style={{ textAlign: "center" }}>Payment</h2>

        <Form.Group as={Col} className="mb-3">
          <Form.Label>Card Number</Form.Label>
          <Form.Control type="number" placeholder="Insert Your card" />
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationFormik01">
            <Form.Label>Expiry Date</Form.Label>
            <Form.Control type="date" placeholder="card ex-date" />
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationFormik02">
            <Form.Label>Security Code</Form.Label>
            <Form.Control type="number" placeholder="Security Code" />
          </Form.Group>
        </Row>
      </div>
      <Button
        className="mt-3"
        as={Link}
        to="/"
        variant="dark"
        type="submit"
        size="lg"
        style={{ textAlign: "center", width: "100%" }}
      >
        Finish
      </Button>
    </div>
  );
};

export default Checkout;
