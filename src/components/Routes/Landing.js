import Carousal from "../Landing/HeadImages";
import Cards from "../Landing/CardsList";
import BigCards from "../Landing/BigCards";
import Text from "../Text";
const Landing = () => {
  return (
    <div>
      <div>
        <Carousal />
      </div>
      <div>
        <Text message="Latest Products" />
        <Cards />
      </div>

      <BigCards />
    </div>
  );
};

export default Landing;
