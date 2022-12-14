import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../redux/cartRedux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../auth.service/auth.service";


// stripe key
const KEY =
  "pk_test_51LWmdWSGxPk4jZ13vrjMH5nyOkGS84hAOr5fmDikbWTZ548Me4dYP98J4KYWwnHx5oitzsdESNBQAhZQ8wbtXfTW00YPvEUw0n";


  
// cart function
export default function Cart() {
  // authtoken 
  const authToken = window.localStorage.getItem("authToken");


  // navigate to page
  const navigate = useNavigate();

  // state management
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // declere the variables
  const product = cart.products;
  const quantity = cart.quantity;
  const total = cart.total;

  // initial order status
  const status = "order placed";

  // remove from cart
  const handleRemove = (index) => {
    dispatch(removeProduct({index,  price: product[index].price, quantity, total }));
  };

  // payment function & api call
  async function handleToken(token, addresses) {
    // send to payment
    const response = await axios.post(
      `${API_URL}/checkout/payment`,
      { token, product },
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );

    // send to orders from db
    await axios.post(
      `${API_URL}/orders`,
      {token, product, total, status },
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );

    // navigate to success page
    navigate("/credit");
    if (response === 200) {
      navigate("/credit");
      console.log("200");
    } else {
      console.log("error");
    }
  }

  return (
    <div>
  
      <div className="container">
      
      <i class="fa size fa-arrow-left mt-5 hand" onClick={()=>navigate("/shop")} aria-hidden="true"></i>
        
        <div className="row">
       
        <div className="d-flex justify-content-center">
        
          <h1 className="text-center  bg-warning rounded-pill p-2">
            
            Your Cart <span className="text-danger">({quantity})</span>
          </h1>
          </div>
          {quantity === 0?(
            <>
              <h1 className="text-center">Your Cart Is Empty</h1>
              <img className="img-fluid mx-auto mt-5" style={{width: "35rem"}} src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="" />
              </>
          ):(
          <div className="col-lg-7 col-md-12 col-12 mx-auto mt-3">
            
            {product.map((c, index) => {
              const { img, _id, name, quantity, price, size } = c;
              return (
                <>
                  <div
                    className="card mb-3 border-0 shadow order"
                    style={{ maxWidth: "450px" }}
                  >
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={img.url}
                          className="img-fluid"
                          style={{ width: "120px" }}
                          alt="..."
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body  rounded-3 ">
                          <h5 className="card-title text-danger">
                            <small className="text-success">{name}</small>
                          </h5>
                          <p className="card-text fw-bold text-danger">
                            Rs:{" "}
                            <small className="text-success fw-bold">
                              {price}
                            </small>
                          </p>
                          <p className="card-text text-danger fw-bold">
                            Qty:-{" "}
                            <span className="text-success">{quantity}</span>
                          </p>
                          
                          <p className="fw-bold text-danger">
                            Size: <small className="text-success">{size}</small>
                          </p>
                          {/* delete btn */}
                            <i
                              className="fa fa-trash fa-2x hands"
                              aria-hidden="true"
                              onClick={() => handleRemove(index)}
                            ></i>
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>  )}
          
          <div className="col-lg-4 col-md-12 col-12 mt-5 text-center">
            <ul className="list-group list-group-flush mt-5">
              <hr />
              <li className="list-group  fw-bold text-primary mb-3">PAYMENT</li>
              <hr />
              <li className="list-group fw-bold mb-3 text-danger">
                Total= {Math.round(total)} /-
              </li>
              <li className="list-group-item ">
                {/* pay btn */}
                <StripeCheckout
                  name="Clothes"
                  billingAddress
                  shippingAddress
                  description={`Your amount is ??? ${Math.round(total)}`}
                  amount={Math.round(total) * 100}
                  token={handleToken}
                  currency="INR"
                  stripeKey={KEY}
                >
                  <button
                    className="btn btn-lg btn-dark text-warning fw-bold w-100"
                  >
                    Pay Now
                  </button>
                </StripeCheckout>
              </li>
            </ul>
            
          </div>
       
        </div>
      </div>
    </div>
  );
}



