
import {createContext, useContext, useReducer} from 'react'
import { cartReducer, productReducer } from './Reducers';
const faker = require('faker');

const Cart = createContext()
faker.seed(99);
const Context = ({children}) => {

  const products = [...Array(20)].map(() => ({
     id: faker.datatype.uuid(),
     name: faker.commerce.productName(),
     price: faker.commerce.price(),
     image: faker.random.image(),
     inStock: faker.datatype.number({min: 0, max: 5}),
     fastDelivery: faker.datatype.boolean(),
     ratings: faker.datatype.number({min: 1, max: 5})

}));

 const [state, dispatch] = useReducer(cartReducer, {
  products: products,
  cart:[]

 })
   
 const [productState, productDispatch] = useReducer(productReducer, {
  byStock: false,
  byFastDelivery: false,
  byRating:0,
  searchQuery:"",
 })
  return <Cart.Provider value={{state,dispatch, productState, productDispatch}}>{children}</Cart.Provider>
}

export default Context;


export const CartState = () => {
  return useContext(Cart)
}