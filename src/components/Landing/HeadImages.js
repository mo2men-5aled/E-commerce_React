import { Carousel } from "react-bootstrap";

const Carousal = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/id/314/1000/300"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/id/313/1000/300"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/id/311/1000/300"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousal;
