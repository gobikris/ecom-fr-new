import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

export default function Homepage() {

  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      <Navbar />
      
      <div className="row justify-content-center mx-auto">
        {/* Content page */}

        <div className="col-sm-5 col-md-6 col-lg-6 text-center mt-5">
          <h1 className="display-1 fw-bold text-danger">Buy Fashion</h1>
          <h1 className="display-6 fw-bold">T-Shirt</h1>
          <h6 className="display-6">Trade in offer, Super Value Deals</h6>
          <p className="text-secondary text-success fw-bold">
            On All Products SAVE UPTO 50%
          </p>
          <button
            className="btn btn-outline-dark border-0 rounded-pill btn-lg w-25 fw-bold"
            onClick={() => navigate("/shop")}
          >
            Shop Now
          </button>
        </div>
        {/* Images */}
        <div className="col-sm-6">
          <img
            className="w-100"
            src="https://hotdealszone.com/wp-content/uploads/2021/04/Get-Access-to-Hot-Deals.png"
            alt=""
          />
        </div>

        <div>
          <br />

          <h1 className="text-center fw-bold text mb-5  mt-5">Our Products</h1>
          <div className="d-flex flex-wrap justify-content-between gap-4 mt-5">
            <div class="card rounded-5 border-0" style={{ width: "18rem" }}>
              <img
                src="https://contents.mediadecathlon.com/p732697/a7ceed49f385e3e13bab53fd65f40455/p732697.jpg?format=auto&quality=70&f=440x0"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text text-center fw-bold">Polo Tshirt</p>
              </div>
            </div>

            <div class="card rounded-5 border-0" style={{ width: "18rem" }}>
              <img
                src="https://4.imimg.com/data4/BE/WA/MY-9097565/mens-round-neck-t-shirts-500x500.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text text-center fw-bold">Round Tshirt</p>
              </div>
            </div>

            <div class="card rounded-5 border-0" style={{ width: "18rem" }}>
              <img
                src="https://pyxis.nymag.com/v1/imgs/333/585/da5605a2bb5d66e7d75d147034786ab4be.rsquare.w600.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text text-center fw-bold">Full Sleeve</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div>{/* <Footer/> */}</div>
      </div>
    </div>
  );
}
