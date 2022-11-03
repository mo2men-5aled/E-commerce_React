import Item from "./Item";
const HeaderItems = () => {
  return (
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <Item txt="Home" />
      <Item txt="Info" />
      <Item txt="Contact Us" />
    </ul>
  );
};

export default HeaderItems;
