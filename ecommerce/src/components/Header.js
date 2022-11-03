import logo from "./assets/brand/1.png";
import HeaderItems from "./HeaderItems";
const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg" style={{ backgroundColor: "#F27B57" }}>
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="/">
            <img
              src={logo}
              alt="Logo"
              width="50"
              height="50"
              class="d-inline-block "
            />
            <p
              className="nav d-inline-block"
              style={{ textAlign: "center", marginLeft: "10px" }}
            >
              Navbar
            </p>
          </a>

          <HeaderItems />

          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
