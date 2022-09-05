import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { useSelector } from 'react-redux/es/exports';
import toast from "react-hot-toast";
import Admin from "../Admin/Admin";
import img2 from "../images/cloth.png";


export default function Navbar() {

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
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg text-center nbg text-white   ">
        <div className="container-fluid">
          {/* <Link className="navbar-brand fw-bold text-danger" to="/">
            CLOTHES
          </Link> */}
          <img src={img2}  onClick={()=>navigate("/")} className="cur rounded-3" style={{ width: "5rem" }} alt="" />
          <button
            className="navbar-toggler text-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          

            <ul className="navbar-nav ms-auto mb-2  gap-5 ">
              <li className="nav-item ">
                {/* home */}
                <Link className="fw-bold link text-decoration-none " to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                {/* shop */}
                <Link className="fw-bold text-decoration-none" to="/shop">
                  Shop
                </Link>
              </li>
              <li className="nav-item ">
                {/* contact */}
                <Link
                  className="fw-bold text-decoration-none"
                  to="/contact"
                  role="tab"
                >
                  Contact Us
                </Link>

              </li>

 
        {/* Account Dropdown */}

              <div className="dropdown ">
                <Link to="/"
                  className="text-decoration-none fw-bold text-white "
                 
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  
                >
                  Account
                </Link>
               
                <ul className="dropdown-menu text-center">

                  {/* email */}
                  <li>
                    <Link className="dropdown-item fw-bold" to="/profile">
                     
                      {email}
                    </Link>
                  </li>

                  {/* Orders */}

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
              
              {/* Admin btn  */}
                <li> 
                <Link
                  className="fw-bold text-decoration-none m-3"
                  to="/ahome"
                  
                  role="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  // onClick={() => navigate("/Admin")}
                >
                  <i class="fa fa-user" aria-hidden="true"></i>
                </Link>

                <Admin />
              </li> 
            </ul>
            {/* this is cart btn section */}
            <div className="d-flex me-2 gap-4" role="search">
              <Link className="fw-bold text-dark" to="/signin">
                <i
                  className="fa fa-2x text-success fa-sign-in"
                  aria-hidden="true" 
                ></i>
              </Link>
              
              <Link
              to="/cart"  className="text-dark border hand border-0 bg-transparent  position-relative"
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





 