import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { API_URL } from "../auth.service/auth.service";

export default function ProductDetail() {

  const authToken = window.localStorage.getItem("authToken");

  const navigate = useNavigate();

  const [list, setList] = useState({});

  const { id } = useParams();
  
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const [size, setSize] = useState("");


  const getProductById = async () => {

    try {
      const authToken = window.localStorage.getItem("authToken");
      const { data } = await axios.get(`${API_URL}/products/${id}`,
      {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      setList(data);
      

    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProductById();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(
      addProduct({...list,price:list.price,quantity,size})
    )
  }
 

  return (
    <div className="container my-2 pt-2 ">
    
      {authToken&&(
      <div className="row mt-5">
     
      <i className="fa fa-2x fa-arrow-left cur" aria-hidden="true" onClick={()=>navigate("/shop")}></i>
        <div className="col-lg-5 col-md-12 col-12 mb-2">
        
        
          <div
            id="carouselExampleControls"
            className="carousel slide  mx-5 "
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={list.img}
                  className="d-block imgfun rounded-5 img-fluid"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={list.img1}
                  className="d-block imgfun  rounded-5 img-fluid"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={list.img2}
                  className="d-block imgfun rounded-5 img-fluid"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-lg-5 col-md-12 col-12 mb-2">
          <p className="text-success  fw-bold">
            <i class="fa fa-star text-warning" aria-hidden="true"></i>{" "}
            {list.rating} Rating
          </p>
          <h2>{list.name}</h2>
          <h4>Rs: <span className="text-danger fw-bold">{list.price}</span></h4>
          <p className="text-success fw-bold">
            (Off {list.offer} ) <i class="fa fa-percent" aria-hidden="true"></i>
          </p>
          <p className="fw-bold">
            Fit: <span className="text-danger"> {list.fit}</span>
          </p>
          <p className="fw-bolder">Product Details:-</p>
          <h6 className="mb-4">{list.desc}</h6>

          {/* this add and reduce btn */}

          <div className="d-flex gap-3">
            {/* add + btn */}
            <i class="fa fa-plus hand" aria-hidden="true" onClick={() => handleQuantity("inc")} ></i>
            <i class="fa  fa-number font-weight" aria-hidden="true">
              {quantity}
            </i>
            {/* sub - btn */}
            <i class="fa fa-minus hand" aria-hidden="true" onClick={() => handleQuantity("dec")} ></i>

            {/* size selector */}
            <select
              className="form-select-md text-center border border-2 rounded border-primary"
              aria-label=".form-select-sm example" onChange={(e)=>setSize(e.target.value )}
            >
              <option selected>--Select Size--</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="XL">XL</option>
              <option value="2XL">2 XL</option>
              <option value="3XL">3 XL</option>
              <option value="4XL">4 XL</option>
              <option value="5XL">5 XL</option>
            </select>

            {/* use navigate to cart */}
          </div>
          <div className="d-flex gap-3">
          <button className="btn btn-dark text-warning fw-bold mt-4" onClick={handleClick}>Add to Bag</button>
         
          <button  className="btn btn-dark text-warning fw-bold mt-4" onClick={()=>navigate("/cart")}>Go to Cart</button>
          </div>
          {/* model trigger */}
          <button className="mt-2 btn btn-outline-primary border-0 bg-transparent btn-lg"
              aria-hidden="true"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal2">
            <span className="text-secondary">📏Size</span>
          </button>

          {/*  model start */}

          <div
            className="modal fade"
            id="exampleModal2"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog ">
              <div className="modal-content ">
                <div className="modal-header ">
                  <h5 className="modal-title " id="exampleModalLabel">
                    Size Guide
                  </h5>
                  <button
                    type="button"
                    className="btn-close bg-danger"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body text-center">
                  <img
                    src="https://i.pinimg.com/originals/54/b9/a9/54b9a9cb8685b54ffc43dc6a1681c7a7.jpg"
                    className="w-75"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
          
      </div>
     
     )}{!authToken&&navigate("/signin")}
    </div>
  );
}
