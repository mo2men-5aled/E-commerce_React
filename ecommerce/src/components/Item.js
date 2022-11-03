import Nav from "react-bootstrap/Nav";

const Item = (props) => {
  return <Nav.Link href="#action1">{props.txt}</Nav.Link>;
};

export default Item;
