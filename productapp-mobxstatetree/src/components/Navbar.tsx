
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function NavbarComp() {
    return <Navbar bg="primary" data-bs-theme="dark">
        <Container>
            <Navbar.Brand href="#">ShopApp</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Products</Nav.Link>
                <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
            </Nav>
        </Container>
    </Navbar>

}