import { Button } from '@mui/material';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';
import pic from './images/imagelogo.png'
function NavScrollExample() {
  return (
    // <Navbar bg="#1c1713" expand="sm" style={{backgroundColor:"#1c1713"}}>
    <Navbar expand="lg" bg="#1c1713" style={{backgroundColor:"#1c1713"}}>
      <Container fluid>
        <Navbar.Brand href="#"><img src={pic} style={{width:"130px",height:"85px"}} ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            
          >
            <Button><Nav.Link href="/" style={{color:'white'}}>Home</Nav.Link></Button>
            
            {/* <Button><Nav.Link href="/login" style={{color:'white'}}>AboutUs</Nav.Link></Button> */}
           
          <Button><Nav.Link href="/login" style={{color:'white'}}>Login</Nav.Link></Button>
            
          </Nav>
          
          <Nav 
           className="ml-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
            >
          <Button><Nav.Link href="#about" style={{color:'white'}}><PersonIcon/>Profile</Nav.Link></Button>
          <Button><Nav.Link href="#contact" style={{color:'white'}}><FavoriteBorderIcon/>Wishlist</Nav.Link></Button>
          {/* <Button><Nav.Link href="/login" style={{color:"white"}}><ShoppingCartIcon/>Cart</Nav.Link></Button> */}
          
          {/* <Button><Nav.Link href="/login" style={{color:"white"}}><ShoppingCartIcon/>Cart</Nav.Link></Button> */}

          </Nav>
          <Nav className="ml-auto my-2 my-lg-0">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{marginTop:"5px"}}
            />
            <Button variant="outline-success" style={{color:"white"}}>Search</Button>
          </Form>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;