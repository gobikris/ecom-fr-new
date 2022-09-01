
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { API_URL } from "../auth.service/auth.service";
import InfoNav from "./InfoNav";


export default function ProductDetail() {
  // auth service
  const authToken = window.localStorage.getItem("authToken");

  const navigate = useNavigate();

  // api state
  const [list, setList] = useState({});

  // Id api state
  const { id } = useParams();

  // cart state
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const [size, setSize] = useState("");

  // loader
  const [isLoading, setIsLoading] = useState(true);

  // Api
  const getProductById = async () => {
    try {
      
      const { data } = await axios.get(`${API_URL}/products/${id}`, {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      setList(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  // reload
  useEffect(() => {
    getProductById();
  }, [id]);

  // increase and decrease
  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  // add to cart
  const handleClick = () => {
    dispatch(addProduct({ ...list, price: list.price, quantity, size }));
  };

  return (
    <div className="container-fluid">
      <InfoNav/>
      {/* loader */}

      {isLoading && (
        <div className="mt-5">
          <div className="row mt-5">
            <div className="col text-center mt-5">
              <div class="spinner-grow text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-grow text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-grow text-success" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-grow text-danger" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-grow text-warning" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-grow text-info" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-grow text-light" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-grow text-dark" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      )}
      {authToken && (
        <div className="row mt-4">
          <i
            className="fa fa-2x fa-arrow-left cur text-danger"
            aria-hidden="true"
            onClick={() => navigate("/shop")}
          ></i>
          <div className="col-lg-5 col-md-12 col-12 mb-2">
            {/* Carousel for img,img1,img2 */}
            <div
              id="carouselExampleControls"
              className="carousel slide  mx-5 "
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={list.img?.url}
                    className="d-block imgfun rounded-5 img-fluid"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={list.img1?.url}
                    className="d-block imgfun  rounded-5 img-fluid"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={list.img2?.url}
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

          {/* end carousel*/}

          {/* product description */}
          <div className="col-lg-5 col-md-12 col-12 mb-2">
            <p className="text-success  fw-bold">
              <i class="fa fa-star text-warning" aria-hidden="true"></i>{" "}
              {list.rating} Rating
            </p>
            <h2>{list.name}</h2>
            <h4>
              Rs: <span className="text-danger fw-bold">{list.price}</span>
            </h4>
            <p className="text-success fw-bold">
              (Off {list.offer} ){" "}
              <i class="fa fa-percent" aria-hidden="true"></i>
            </p>
            <p className="fw-bold">
              Fit: <span className="text-danger"> {list.fit}</span>
            </p>
            <p className="fw-bolder">Product Details:-</p>
            <h6 className="mb-4">{list.desc}</h6>

            {/*  add and reduce btn */}

            <div className="d-flex gap-3">
              {/* add + btn */}
              <i
                class="fa fa-plus hand bg-dark p-2 rounded-2 text-white"
                aria-hidden="true"
                onClick={() => handleQuantity("inc")}
              ></i>

              {/* quantity */}
              <i
                class="fa  fa-number font-weight bg-light  p-2 rounded-2 fw-bold"
                aria-hidden="true"
              >
                {quantity}
              </i>

              {/* sub - btn */}

              <i
                class="fa fa-minus hand bg-dark hand p-2 rounded-2 text-white"
                aria-hidden="true"
                onClick={() => handleQuantity("dec")}
              ></i>

              {/* size selector */}
              <select
                className="form-select-md text-center border border-2 rounded border-primary"
                aria-label=".form-select-sm example"
                onChange={(e) => setSize(e.target.value)}
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
              <button
                className="btn btn-dark text-warning fw-bold mt-4"
                onClick={handleClick}
              >
                Add to Bag
              </button>

              <button
                className="btn btn-dark text-warning fw-bold mt-4"
                onClick={() => navigate("/cart")}
              >
               Go To Cart
              </button>
            </div>
            {/* model trigger */}
            <button
              className="mt-2 btn btn-outline-primary border-0 bg-transparent btn-lg"
              aria-hidden="true"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal2"
            >
              <span className="text-secondary">📏Size Guide</span>
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
      )}
      {!authToken && navigate("/signin")}
    </div>
  );
}
