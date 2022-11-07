import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {FaSearch} from 'react-icons/fa'
const Header = () => {
  return (
    <div className="header-section">
      <Navbar className='py-3 fixed-top' expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" className= 'd-flex'><img src="assets/nft.png" alt="" width={30} />
              <span className='mx-3 vertical-border d-none d-md-block'></span>
               <span className='text-white'>NFT</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
              <Form className="d-flex">
                <FaSearch className='fa-icon' />
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
          <Navbar.Collapse id="navbarScroll" className=''>
            <Nav
              className="amy-2 my-lg-0"
              navbarScroll
            >
              <Nav.Link href="#action1" className='txt-clr'>Marketplace</Nav.Link>
              <Nav.Link href="#action2">Drops</Nav.Link>
              <NavDropdown title="Brands" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Philadelphia 76ers</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Aston Martin F1
                </NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item href="#action5">
                  Lega Serie A
                </NavDropdown.Item>
                <NavDropdown.Item href="#action6">
                  DRESSX
                </NavDropdown.Item>
                <NavDropdown.Item href="#action7">
                  Heavy Metal
                </NavDropdown.Item>
                <NavDropdown.Item href="#action8">
                  LA Kings
                </NavDropdown.Item>
                <NavDropdown.Item href="#action9">
                  Paris Saint-Germain
                </NavDropdown.Item>
                <NavDropdown.Item href="#action10">
                  UFC
                </NavDropdown.Item>
                <NavDropdown.Item href="#action11">
                  Angel City FC
                </NavDropdown.Item>
                <NavDropdown.Item href="#action12">
                  Crypto.com
                </NavDropdown.Item>
                <NavDropdown.Item href="#action13">
                  DeFi The Game
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Button className="btn btn-create text-white">Create</Button>
              <span className='vertical-border d-none d-md-block'></span>
              <Nav.Link href="#action14">Sign In</Nav.Link>
              <Nav.Link href="#action15">Sign Up</Nav.Link>
              <span className='vertical-border d-none d-md-block'></span>
              <span className="language">
                <a href='/' className="text-decoration-none ">English</a>
              </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header