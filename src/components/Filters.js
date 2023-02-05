import { useState } from 'react'
import React from 'react'
import { Form,Button } from 'react-bootstrap'
import Rating from './Rating'
const Filters = () => {
  const [rate, setRate] = useState(2)
  return (
    <div className='filters'>
      <span className='title'>Filter Products</span>
      <span>
        <Form.Check
        inline
        label="Ascending"
        name="radio"
        id={'inline-1'}/>
      </span>
      <span>
        <Form.Check
        inline
        label="Descending"
        name="radio"
        id={'inline-2'}
        />
      </span>
      <span>
        <Form.Check
        inline
        label="Descending"
        name="radio"
        id={'inline-2'}
        />
      </span>
      <span>
        <Form.Check
        inline
        label="include Out of Stock"
        name="group1"
        type="checkbox"
        id={'inline-3'}
        />
      </span>
      <span>
        <Form.Check
        inline
        label="Fast Delivery only"
        name="group1"
        type="checkbox"
        id={'inline-3'}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating:</label>
        <Rating rating={rate} onClick={(i) => setRate(i + 1)} style={{ cursor:"pointer" }}/>
      </span>
      <Button variant="light">Clear Filters</Button>
    </div>
  )
}

export default Filters