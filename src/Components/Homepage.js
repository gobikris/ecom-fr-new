import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

export default function Homepage() {

  const navigate = useNavigate();

  return (
    <div className="container-fluid ">
      <Navbar />
      
      <div className="row justify-content-center home2 mx-auto  mt-3">

           {/* Content page */}

         <div className="col-sm-5 col-md-6 col-lg-10  mt-5 ">
          <h1 className="display-1 fw-bold text-danger mt-5">Buy Fashion</h1>
          <h1 className="display-6 fw-bold text-light">T-Shirt</h1>
          <p className="display-5 text-light ">Trade in offer, Super Value Deals</p>
          <p className="text-light  fw-bold">
            On All Products SAVE UPTO 50% 
          </p>
          <button
            className="p-2 brand border-0 rounded  w-25 fw-bold"
            onClick={() => navigate("/shop")}
          >
            Shop Now
          </button>
        </div> 
        {/* Images */}
         {/* <div className="col-sm-6">
          <img
            className="img-fluid ms-auto rounded-2 " 
            // src="https://hotdealszone.com/wp-content/uploads/2021/04/Get-Access-to-Hot-Deals.png"
            // src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            // src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            // src="https://images.unsplash.com/photo-1527719477130-6abb4b4d0dd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
            src="https://www.pngitem.com/pimgs/m/48-488793_private-label-t-shirt-manufacturer-t-shirts-on.png"
            // src={img1}
            style={{ width: "33rem" }}
            alt=""
          />
        </div>  */}

        
        <div>{/* <Footer/> */}</div>
      </div>
      <div>
          <br />
          
          <h1 className="text-center fw-bold text mb-5  mt-5">Our Products</h1>
          <div className="col d-flex flex-wrap  justify-content-between gap-4 mt-5">
            <div className="card rounded-5 border-0 bg-transparent cur mx-auto" style={{ width: "18rem" }}>
              <img
              onClick={()=>navigate("/shop")}
                src="https://contents.mediadecathlon.com/p732697/a7ceed49f385e3e13bab53fd65f40455/p732697.jpg?format=auto&quality=70&f=440x0"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body" >
                <p className="card-text text-center fw-bold">Polo Tshirt</p>
              </div>
            </div>

            <div className="card rounded-5 border-0  cur mx-auto" style={{ width: "18rem" }}>
              <img
              onClick={()=>navigate("/shop")}
                src="https://4.imimg.com/data4/BE/WA/MY-9097565/mens-round-neck-t-shirts-500x500.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text text-center fw-bold">Round Tshirt</p>
              </div>
            </div>

            <div className="card rounded-5 border-0 cur mx-auto" style={{ width: "18rem" }}>
              <img
                onClick={()=>navigate("/shop")}
                src="https://pyxis.nymag.com/v1/imgs/333/585/da5605a2bb5d66e7d75d147034786ab4be.rsquare.w600.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text text-center fw-bold">Full Sleeve</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}



