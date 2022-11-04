import Nav from "react-bootstrap/Nav";

const Item = (props) => {
  return <Nav.Link href={props.path}>{props.txt}</Nav.Link>;
};

export default Item;
