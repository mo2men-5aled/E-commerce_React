import { useParams } from "react-router-dom";
import { useState } from "react";

import Data from "../../Data/db.json";

import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";

import Tabbs from "./tabs";

import Text from "../Text";
const ViewProduct = () => {
  const items = Data.items;
  const params = useParams();
  const item = items[params.id];

  const [quantity, setQuantity] = useState(0);

  return (
    <div className="container">
      <Text message={item.name} />
      <div className="card" style={{ width: "100%" }}>
        <div className="row ">
          <div className="col-md-4">
            <img
              style={{ width: "100%", height: "100%" }}
              src={item.image}
              className="rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title" style={{ fontSize: "40px" }}>
                {item.name}
              </h5>
              <p className="card-text" style={{ fontSize: "20px" }}>
                {item.description}
              </p>
              <p className="card-text">
                <small className="text-muted" style={{ fontSize: "15px" }}>
                  {item.price}
                </small>
              </p>

              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Add to cart ..?</Accordion.Header>
                  <Accordion.Body>
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control
                          required
                          placeholder="Type the Quantity you want :)"
                          value={quantity}
                          onChange={(e) => {
                            setQuantity(e.target.value);
                            console.log(quantity);
                          }}
                        />
                      </Form.Group>
                      <Button
                        as={Link}
                        to={`/summary/${item.id}/${quantity}`}
                        variant="primary"
                        type="submit"
                      >
                        Add
                      </Button>
                    </Form>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      <Text message="About this Product" />
      <Tabbs />
    </div>
  );
};

export default ViewProduct;
