import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { useSelector } from 'react-redux/es/exports';
import toast from "react-hot-toast";

import img2 from "../images/cloth.png";

export default function InfoNav() {

  // user email address
  const email = window.localStorage.getItem("email");

  const navigate = useNavigate();

  // Sign Out
  const SignOut = ()=>{
    window.localStorage.clear();
    navigate("/")
    toast.success("Sign Out Successfully");
  }

  const {quantity} = useSelector((state) => state.cart);
  
  return (
    <div>
      <nav class="navbar navbar-expand-lg  nbg">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/"><img src={img2} onClick={()=>navigate("/")} className="cur" style={{ width: "5rem" }} alt="" /> </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 me-5 mb-lg-0">
         
        <div class="nav-item dropdown fw-bold ">
          <Link to="" class="nav-link dropdown-toggle text-light"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Account
          </Link>
          <ul class="dropdown-menu text-center">
            <li>
            <Link className="dropdown-item fw-bold" to="/profile">
                {email}
            </Link>
              
            </li>
            <li>
            <Link className="dropdown-item hand fw-bold" to="/myorders">
                   Orders
              </Link>
            </li>
            <li>
            <Link className="dropdown-item hand fw-bold" to="/" onClick={SignOut}>
                 Sign Out
            </Link>
            </li>
           
          </ul>
        </div>
        
      </ul>
      <div>
      <Link
              to="/cart"  className="text-dark border hand border-0 bg-transparent me-5 position-relative"
              >
                <i 
                  className="fa fa-2x fa-shopping-bag text-danger"
                  aria-hidden="true"
               
                ></i>

                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {quantity}{" "}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </Link>
            </div>
    </div>
  </div>
</nav>
    </div>
    
    
  );
}





 