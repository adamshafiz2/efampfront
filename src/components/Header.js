import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UsersContext";
import { useContext } from "react";
import {
  BiHome,
  BiMenu,
  BsPersonSquare,
  FiLogOut,
  FiSearch,
  FiUser,
} from "react-icons/all";

function Header() {
  const { logout, user } = useContext(UserContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <Navbar className=" navbar-expand">
        <Container>
          <Link to="/">
            <div id="logo">
              {" "}
              <img src="../images/efampt.png" alt="" />
            </div>
          </Link>

          <div class="input-group " style={{ width: "400px" }}>
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                <FiSearch />
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon1"
            />
          </div>

          <Nav>
            <Nav.Link>
              <Link to="/" className="nav-link">
                <BiHome size={25} />
                HOME
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/products" className="nav-link">
                <BiMenu size={25} />
                PRODUCTS
              </Link>
            </Nav.Link>

            {user.token ? (
              <>
                <Nav.Link>
                  <Link to="/additem" className="nav-link">
                    ADD
                  </Link>
                </Nav.Link>
                <NavDropdown
                  title={
                    <FiUser
                      size={25}
                      style={{
                        border: "2px solid #000",
                        borderRadius: 20,
                        padding: 1,
                      }}
                    />
                  }
                >
                  <NavDropdown.Item>{user.name}</NavDropdown.Item>
                  <NavDropdown.Item>{user.email}</NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/" className="nav-link" onClick={handleLogout}>
                      <FiLogOut size={30} />
                      Logout
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <NavDropdown title={<BsPersonSquare size={40} />}>
                <NavDropdown.Item>
                  <Nav.Link>
                    <Link to="/login" className="nav-link">
                      SIGN IN
                    </Link>
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Nav.Link>
                    <Link to="/register" className="nav-link">
                      SIGN UP
                    </Link>
                  </Nav.Link>
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
