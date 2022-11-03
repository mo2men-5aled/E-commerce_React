import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import image from "../../Data/homepage-banner.jpg";

import Text from "../Text";

const BigCards = () => {
  return (
    <Container>
      <Text message="Our Best Selling" />
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default BigCards;
