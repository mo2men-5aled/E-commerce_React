import Carousal from "../Landing/HeadImages";
import Cards from "../Landing/CardsList";
import BigCards from "../Landing/BigCards";
const Landing = () => {
  return (
    <div>
      <div>
        <Carousal />
      </div>

      <Cards />

      <BigCards />
    </div>
  );
};

export default Landing;
