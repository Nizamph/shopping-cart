import { Button, Row, Col,Form,ListGroup,Image } from 'react-bootstrap'
import { useState,useEffect } from 'react'
import { CartState } from '../context/Context'
import { AiFillDelete } from 'react-icons/ai'
import Rating from './Rating'
const Cart = () => {
  const {state: {cart},dispatch,} = CartState();
  
  useEffect(() => {
    setTotal(cart.reduce((acc,curr) => acc + Number(curr.price)*curr.qty, 0))
  },[cart])
  const[total, setTotal] = useState()
  return (
    <div className='home' >
      <div className='productContainer'>
        <ListGroup>
          {
            cart.map((prod) => (
              <ListGroup.Item>
              <Row>
                <Col md={2}>
                  <Image src={prod.image} alt={prod.name} fluid rounded/>
                </Col>
                <Col md={2}>
                  <span>{prod.name}</span>
                </Col>
                <Col md={2}>
                  <span><i className="fa fa-inr" aria-hidden="true"></i>{prod.price}</span>
                </Col>
                <Col md={2}>
                  <span>{prod.price}</span>
                </Col >
                <Col md={2}>
                  <Rating rating={prod.ratings}/>
                </Col>
                <Col>
                <Form.Control as="select"  value={prod.qty} className="custom-select">
                  {[...Array(prod.inStock).keys()].map((x) => (
                    <option key={x + 1}>{x + 1}</option>
                  ))}
                </Form.Control>
                </Col>
                 <Col>
                  <Button
                  type='button'
                  variant='light'
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: prod,
                    })
                  }
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                  </Col>
              </Row>
              </ListGroup.Item>
            ))
          }
        </ListGroup>
      </div>
      <div className='filters  ' style={{width:"22%"}}>
          <span className='title'>
          Subtotal ({cart.length}) items
          </span>
          <span style={{fontWeight: 700, fontSize: 20}}>
            Total: <i className="fa fa-inr" aria-hidden="true"></i>
            {total}
          </span>
          <Button type="button" disabled={cart.length === 0}>
            Proceed to Checkout
          </Button>
      </div>
    </div>
  )
}

export default Cart