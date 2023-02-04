
import {createContext} from 'react'
const faker = require('faker');

const Cart = createContext()

const Context = ({children}) => {

  const products = [...Array(20)].map(() => ({
     id: faker.datatype.uuid(),
     name: faker.commerce.productName(),
     price: faker.commerce.price(),
     image: faker.image.fashion(),
     inStock: faker.datatype.number({min: 1, max: 5}),
     fastDelivery: faker.datatype.boolean(),
     ratings: faker.datatype.number({min: 1, max: 5})

}))

console.log(products)
  return<Cart.Provider>{children}</Cart.Provider>
}

export default Context