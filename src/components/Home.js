import React from 'react'
import { CartState } from '../context/Context'
import SIngleProduct from './SIngleProduct'
import "./styles.css"
import Filters from './Filters'

const Home = () => {

  const { state: {products}} = CartState()
  console.log('from home',products)
  return<div className='home'>
    <Filters/>
    <div className='productContainer'>
      {products.map((prod) => {
       return <SIngleProduct prod={prod} key={prod.id}/>
      })}
    </div>
  </div>

}

export default Home