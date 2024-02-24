import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { FiTruck } from "react-icons/fi";
import { BsCurrencyDollar } from "react-icons/bs";
import { HiOutlineReceiptPercent } from "react-icons/hi2";
import { BsHeadphones } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoEye } from "react-icons/go";
import { AiOutlineHeart, AiOutlineCloseCircle } from "react-icons/ai";
import Homeproduct from "./homeproduct.js";
import "./home.css";
const Home = ({ detail, view, close, setClose, addtocart }) => {
    return (
    <>
    {
    close ? (
        <div className="product_detail">
        <div className="container">
            <button onClick={() => setClose(false)} className="closebtn"><AiOutlineCloseCircle /></button>
            {
            detail.map((curElm) => {
            return (
                <div className="productbox">
                <div className="img_box">
                    <img src={curElm.Img} alt={curElm.Title}></img>
                </div>
                <div className="detail">
                    <h4>curElm.Cat</h4>
                    <h2>curElm.Title</h2>
                    <p>
                    A screen Everyone Will love: Whatever your family is
                    steaming or Video chatting with friends Tablet AB...
                    </p>
                    <h3>curElm.Price</h3>
                    <button>Add To Cart</button>
                </div>
                </div>
            );
            })
            }
            <div className="productbox"></div>
          </div>
        </div>
      ) : null 
      }
      <div className="top_banner">
        <div className="container">
          <div className="detail">
            <h2>The Best Note Book Collection 2024</h2>
            <Link to="/product" className="link">
              Shop Now <BsArrowRight />
            </Link>
          </div>
          <div className="img_box">
            <img
              src="https://gngmedia.s3.ap-southeast-1.amazonaws.com/upload/product/20210314_1615707666_655476.jpeg"
              height="300"
              width="300"
            ></img>
          </div>
        </div>
      </div>
      <div className="product_type">
        <div className="container">
          <div className="box">
            <div className="img_box">
              <img
                src="https://tiendasishop.com/media/catalog/product/i/p/iphone_14_pro_deep_purple_pdp_image_position-1a_mxla_3.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700"
                height="200"
                width="200"
              ></img>
            </div>
            <div className="detail">
              <p>23 Products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box">
              <img
                src="https://media.cnn.com/api/v1/images/stellar/prod/new-project-95.jpg?c=16x9&q=h_720,w_1280,c_fill"
                height="150"
                width="200"
              ></img>
            </div>
            <div className="detail">
              <p>18 Products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box">
              <img
                src="https://i.ebayimg.com/images/g/YosAAOSwgoJivQKy/s-l1600.jpg"
                height="200"
                width="200"
              ></img>
            </div>
            <div className="detail">
              <p>52 Products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTotoqFv2pesKppMleeuJevKURWkgrtY8Liaw&usqp=CAU"></img>
            </div>
            <div className="detail">
              <p>63 Products</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="container">
          <div className="box">
            <div className="icon">
              <FiTruck />
            </div>
            <div className="detail">
              <h3>Free Shipping</h3>
              <p>Order above $1000</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <BsCurrencyDollar />
            </div>
            <div className="detail">
              <h3>Return & Refund</h3>
              <p>Money Back Gaureanty</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <HiOutlineReceiptPercent />
            </div>
            <div className="detail">
              <h3>Member Discount</h3>
              <p>On Every Order</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <BsHeadphones />
            </div>
            <div className="detail">
              <h3>Customer Support</h3>
              <p>Every Time Call Support</p>
            </div>
          </div>
        </div>
      </div>
      <div className="product">
        <h2>Top Products</h2>
        <div className="container">
          {Homeproduct.map((curElm) => {
            return (
              <div className="box" key={curElm.id}>
                <div className="img_box">
                  <img src={curElm.Img}></img>
                  <div className="icon">
                    <li onClick={() => addtocart (curElm)}>
                      <AiOutlineShoppingCart />
                    </li>
                    <li onClick={() => view(curElm)}>
                      <GoEye />
                    </li>
                    <li>
                      <AiOutlineHeart />
                    </li>
                  </div>
                </div>
                <div className="detail">
                  <p>{curElm.Cat}</p>
                  <h3>{curElm.Title}</h3>
                  <h4>${curElm.Price}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="banner">
        <div className="container">
          <div className="detail">
            <h4>LATEST TECHNOLOGY ADDED</h4>
            <h3>Apple ipad 10.2 9th Gen - 2022</h3>
            <p>$ 986</p>
            <Link to="/product" className="link">
              Shop Now <BsArrowRight />
            </Link>
          </div>
          <div className="img_box">
            <img
              src="https://gngmedia.s3.ap-southeast-1.amazonaws.com/upload/product/20210314_1615707666_655476.jpeg"
              height="300"
              width="500"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
