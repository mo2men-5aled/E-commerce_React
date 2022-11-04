import Item from "./Item";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
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
          Offcanvas
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Item path="#/" txt="Home" />

          <Item path="#/list" txt="Our Products" />
          <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown-expand-sm">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  );
};

export default HeaderItems;
