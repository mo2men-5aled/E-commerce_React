import Item from "./Item";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

const HeaderItems = () => {
  return (
    <Navbar.Offcanvas
      id="offcanvasNavbar-expand-sm"
      aria-labelledby="offcanvasNavbarLabel-expand-sm"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel-expand-sm">
          SideBar
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Item path="#/" txt="Home" />

          <Item path="#/list" txt="Our Products" />
          <Item path="#/about" txt="About Us" />
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  );
};

export default HeaderItems;
