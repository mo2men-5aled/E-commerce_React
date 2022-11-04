import { Carousel } from "react-bootstrap";

const Carousal = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Carousel>
        <Carousel.Item>
          <img src="https://picsum.photos/id/314/1000/300" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://picsum.photos/id/313/1000/300" alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://picsum.photos/id/311/1000/300" alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousal;
