import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Text from "../../components/Text";
import Data from "../../Data/db.json";
const Cards = () => {
  const items = Data.items;
  return (
    <Container>
      <Text message="Latest Products" />
      <Row xs={2} md={3} lg={4} className="g-5">
        {items.map((item) => {
          return (
            <Col key={item.id}>
              <Card>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
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
