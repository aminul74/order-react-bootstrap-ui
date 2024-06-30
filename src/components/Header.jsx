import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar expand="lg" className="d-flex justify-content-between text-bold">
      <Navbar.Brand className="font-weight-bold">Orders</Navbar.Brand>
      <div className="d-flex align-items-center">
        <Nav className="ms-auto">
          <Nav.Link href="#notifications">
            <i className="bi bi-bell-fill"></i>
            <span className="badge badge-danger">10</span>
          </Nav.Link>
          <div className="d-flex align-items-center ml-2">
            <img
              src="../src/assets/profile-circle-icon.png"
              alt="Profile"
              className="rounded-circle me-2"
              style={{ width: "30px" }}
            />
            <div>
              <div>Robie Peter</div>
              <small className="text-muted">Store Manager</small>
            </div>
          </div>
          <NavDropdown title="" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </div>
    </Navbar>
  );
};

export default Header;
