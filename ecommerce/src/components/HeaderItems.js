import Item from "./Item";
const HeaderItems = () => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <Item txt="Home" route="/" />
      <Item txt="Products" route="/list" />
      <Item txt="About Us" />
    </ul>
  );
};

export default HeaderItems;
