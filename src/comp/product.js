import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoEye } from "react-icons/go";
import { AiOutlineHeart, AiOutlineCloseCircle} from "react-icons/ai";
import Productdetail from './productdetail'
import'./product.css'
const Product = ({product, setProduct, detail, view, close, setClose, addtocart}) => {

  const filtterproduct = (product) =>
  {
    const update = Productdetail.filter((x) =>
    {
    return x.Cat === product;
    })
    setProduct(update);
  }
  const AllProducts = () =>
  {
    setProduct(Productdetail)
  }
  return (
    <>
    {
      close ?
    <div className='product_detail'>
      <div className='container'>
        <button onClick={() => setClose(false)} className='closebtn'><AiOutlineCloseCircle /></button>
        {
          detail.map((curElm) =>
          {
            return(
              <div className='productbox'>
                <div className='img_box'>
                  <img src={curElm.Img} alt={curElm.Title}></img>
                </div>
                <div className='detail'>
                  <h4>curElm.Cat</h4>
                  <h2>curElm.Title</h2>
                  <p>A screen Everyone Will love: Whatever your family is steaming or Video chatting with friends Tablet AB...</p>
                  <h3>curElm.Price</h3>
                  <button>Add To Cart</button>
                </div>
              </div>
            )
          })
        }
        <div className='productbox'></div>
      </div>
    </div> : null
    }
    <div className='products'>
    <h2># Products</h2>
    <p>Home . products</p>
      <div className='container'>
        <div className='filter'>
          <div className='categories'>
            <h3>Categories</h3>
            <ul>
            <li onClick={() =>AllProducts()}>All Products</li>
              <li onClick={() => filtterproduct ("Tablet")}>Tablet</li>
              <li onClick={() => filtterproduct ("Smart Watch")}>Smart Watch</li>
              <li onClick={() => filtterproduct ("Headphone")}>Headphone</li>
              <li onClick={() => filtterproduct ("Camera")}>Camera</li>
              <li onClick={() => filtterproduct ("Gaming")}>Gaming</li>
            </ul>
          </div>
        </div>
        <div className='productbox'>
          <div className='contant'>
            {
              product.map((curElm) => 
              {
                return(
                  <>
                    <div className='box' key={curElm.id}>
                        <div className='img_box'>
                            <img src={curElm.Img}></img>
                              <div className='icon'>
                                <li onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></li>
                                <li onClick={() => view (curElm)}><GoEye /></li>
                                <li><AiOutlineHeart /></li>
                            </div>
                        </div><div className='detail'>
                                <p>{curElm.Cat}</p>
                                <h3>{curElm.Title}</h3>
                                <h4>${curElm.Price}</h4>
                            </div>
                                    </div>

                  </>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Product