import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from 'C:\\Users\\rpsev\\Documents\\my-app\\client\\src\\components\\Logo.png'; // Your logo image in src folder

const AppNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
            alt="Company Logo"
          />
          Electromagnet
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Certifications</Nav.Link>
            <Nav.Link href="#estimates">Estimates</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;