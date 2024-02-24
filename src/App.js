import React, {useState} from 'react'
import Nav from './comp/nav'
import Rout from './comp/rout';
import {BrowserRouter} from 'react-router-dom';
import Footer from './comp/footer';
import Productdetail from './comp/productdetail';
const App = () => {
  //add to cart
  const[cart, setCart] = useState([])
  //Product Detail
  const[close, setClose] = useState(false)
  const [detail, setdetail] = useState([])
  //filter product
  const [product, setProduct] = useState(Productdetail)
  const searchbtn = (product) =>
  {
  const change = Productdetail.filter((x) =>
  {
    return x.Cat === product
  })
  setProduct(change)
  }
  //product detail
  const view = (product) =>
  {
    setdetail([{...product}])
    setClose(true)
  }
  //add to cart
  const addtocart = (product) =>
  {
    const exsit = cart.find((x) =>
    {
      return x.id === product.id
    })  
    if(exsit)
    {
      alert("This Product is already added to Cart")
    }
    else
    {
      setCart([...cart, {...product, qty:1}])
      alert("product is added to cart")
    }
  }
  console.log(cart)
  return (
    <> 
    <BrowserRouter>
    <Nav searchbtn={searchbtn} />
    <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addtocart={addtocart} />
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App