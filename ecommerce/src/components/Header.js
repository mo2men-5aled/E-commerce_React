import logo from "./assets/brand/1.png";
import HeaderItems from "./HeaderItems";
const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#F27B57" }}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="/">
            <img
              src={logo}
              alt="Logo"
              width="50"
              height="50"
              className="d-inline-block "
            />
            <p
              className="nav d-inline-block"
              style={{ textAlign: "center", marginLeft: "10px" }}
            >
              Navbar
            </p>
          </a>

          <HeaderItems />

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
