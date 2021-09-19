import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const NavbarComp = () => {
  const items = useSelector((state) => state.item);

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Nav className="ml-auto">
            <Navbar.Text>
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                HOME
              </Link>
            </Navbar.Text>
          </Nav>
          <Navbar.Brand className="mx-auto">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              GALLERIA
            </Link>
          </Navbar.Brand>
          <Link to="/cart">
            <Navbar.Text>
              <i
                className="fa fa-shopping-cart"
                aria-hidden="true"
                style={{
                  fontSize: "20px",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                &nbsp; {items.length}
              </i>
            </Navbar.Text>
          </Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
