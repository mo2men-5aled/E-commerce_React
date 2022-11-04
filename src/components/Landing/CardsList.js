import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { Link } from "react-router-dom";

import Text from "../../components/Text";
import Data from "../../Data/db.json";
const Cards = () => {
  const items = Data.items;
  return (
    <Container>
      <Text message="Latest Products" />
      <Row xs={2} md={3} lg={4} className="g-3">
        {items.map((item) => {
          return (
            <Col key={item.id}>
              <Card>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Link to={`/SingleProduct/${item.id}`}>
                    <Card.Title>{item.name}</Card.Title>
                  </Link>
                  <Card.Text>{item.description}</Card.Text>
                  <Card.Footer>{item.price}</Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Cards;
