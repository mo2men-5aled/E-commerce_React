import logo from "../components/assets/brand/1.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import HeaderItems from "./HeaderItems";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            Navbar
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" />
          <HeaderItems />
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
