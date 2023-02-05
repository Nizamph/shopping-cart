import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import {Container, FormControl, Navbar, Dropdown, Nav, Badge} from "react-bootstrap"
import { Link } from 'react-router-dom'
import { CartState } from '../context/Context'
const Header = () => {

    const {state: { cart },} = CartState()
  return <Navbar bg='dark' variant='dark' style={{height: 80}}>
    <Container>
        <Navbar.Brand>
         <Link to="/">Shoping cart</Link>
        </Navbar.Brand>
        <Link to='/' className='text-white'>Home</Link>
        <Link to="/cart" className='text-white'>Contact</Link>
        <Navbar.Text className='search'>
          <FormControl style={{ width : 500 }} placeholder="search a product"
           className='m-auto'
           />
          </Navbar.Text> 
          <Nav>
          
          <Dropdown >
      <Dropdown.Toggle variant="success">
      <FaShoppingCart color="white" fontSize="25px"/>
        <Badge className='bg-success'>{cart.length}</Badge>
      </Dropdown.Toggle>

      <Dropdown.Menu  style={{ minWidth: 200 }}>
 
      </Dropdown.Menu>
    </Dropdown>
          </Nav>
       
    </Container>
  </Navbar>
}
export default Header