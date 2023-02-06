import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import {Container, FormControl, Navbar, Dropdown, Nav, Badge} from "react-bootstrap"
import { Link } from 'react-router-dom'
import { CartState } from '../context/Context'
import { AiFillDelete } from 'react-icons/ai'
import { Button } from 'react-bootstrap'
const Header = () => {

    const {state: { cart }, dispatch} = CartState()
  return <Navbar bg='dark' variant='dark' style={{height: 80}}>
    <Container>
        <Navbar.Brand>
         <Link to="/">Shoping cart</Link>
        </Navbar.Brand>
        <Link to='/' className='text-white'>Home</Link>
        <Link to="/contact" className='text-white'>Contact</Link>
        <Navbar.Text className='search'>
          <FormControl style={{ width : 500 }} placeholder="search a product"
           className='m-auto'
           />
          </Navbar.Text> 
          <Nav>
          
          <Dropdown >
      <Dropdown.Toggle variant="success">
      <FaShoppingCart color="white" fontSize="25px"/>
        <Badge className='bg-success '>{cart.length}</Badge>
      </Dropdown.Toggle>

      <Dropdown.Menu  style={{ minWidth: 345, left: -190}} >

        { cart.length>0?(
          <>
          {
            cart.map((prod) => (
              <div>
              <span className='cartitem' key={prod.id}>
                <img 
                src={prod.image}
                className="cartItemImg"
                alt={prod.name}
                />
                <div className='cartItemDetail'>
                  <span>{prod.name}</span>
                  <span><i className="fa fa-inr" aria-hidden="true"></i> {prod.price.split(".")[0]}</span>
                </div>
                <AiFillDelete
                fontSize="20px"
                style={{cursor: "pointer"}}
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: prod,
                  })
                }
                />
              </span>
              <Link to="/cart">
                <Button style={{width: "95%", margin: "0 10px"}}>
                  Go To Cart
                </Button>
              </Link>
              </div>
            ))
          }
          </>
        ):(
          <span style={{textAlign:"center"}}>Cart is Empty</span>
        ) }
 
      </Dropdown.Menu>
    </Dropdown>
          </Nav>
       
    </Container>
  </Navbar>
}
export default Header