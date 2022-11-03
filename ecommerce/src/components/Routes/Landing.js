import Carousal from "../Landing/HeadImages";
import Cards from "../Landing/CardsList";
const Landing = () => {
  return (
    <div>
      <Carousal />
      <div
        className="container"
        style={{ textAlign: "center", padding: "30px" }}
      >
        <h1>Latest Products</h1>
      </div>
      <Cards />
    </div>
  );
};

export default Landing;
