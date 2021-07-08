import { Navbar, NavbarBrand, NavItem } from "reactstrap";

const NavBar = () => (
  <Navbar color="dark" className="navbar-dark navbar-expand-sm">
    <NavItem>
      <NavbarBrand className="mr-auto">Video App</NavbarBrand>
    </NavItem>
  </Navbar>
);
export default NavBar;
