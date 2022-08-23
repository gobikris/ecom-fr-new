import React from 'react';
import { Link,useNavigate } from 'react-router-dom';


export default function Contact() {
  
const navigate = useNavigate()

  return (
    <div>
      <div className="container">
        
        <div className="row mt-3">

    {/* back icon */}
        <i className="fa fa-2x fa-arrow-left cur" aria-hidden="true" onClick={()=>navigate("/")}></i>
         
          <div className="d-flex gap-3 justify-content-center">
          
          <h1 className="text-center bg-warning p-2 rounded-3 fw-bold">Contact Us</h1>
          </div>
        
        
          <div className="col-lg-5 col-md-12 col-12 mt-4 m-auto">

      {/* address */}
          <h1 className="fw-bold text-primary mt-3 "><i className="fa fa-location-arrow" aria-hidden="true"></i> LOCATION</h1>
          <h4 className="text-dark ">
            support@clothes.in <br />
            North steert,  Main <br /> Road (NH 8 - Near 
            Hotel) <br />
            Tamilnadu, India 600001
          </h4>
<hr />
          <h1 className="text-primary mt-3">NEED HELP <i className="fa fa-question" aria-hidden="true"></i></h1>
         
          <i class="fa fa-2x fa-envelope mb-2" aria-hidden="true"> info@clothes.in</i>  <br />
          
          <Link to="/return" className="text-decoration-none text-danger fw-bold">Return, Refund and Cancellation</Link>
  <hr />         
           <h1 className="text-primary mt-3">SOCIAL MEDIA</h1>
           <div className="d-flex  gap-3">
           <i class="fa fa-2x fa-facebook-official text-primary" aria-hidden="true"></i>
           <i class="fa fa-2x fa-instagram text-success" aria-hidden="true "></i>
           <i class="fa fa-2x fa-youtube-play text-danger" aria-hidden="true"></i>
           </div>
            {/* <h5 className="mt-2 text-center">LEAVE A MESSAGE</h5>
            <form>
             
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Your Name</label>
              </div>

          
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingInput ">Email Address</label>
              </div>

              
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingInput ">Subject</label>
              </div>

              
              <div class="form-floating mb-3">
                <textarea
                  class="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: "150px" }}
                ></textarea>
                <label for="floatingTextarea2">Comments</label>
              </div>
              <button class="btn btn-success  fw-bold">Send</button>
            </form>
            <div>
              
            </div>*/}
          </div>
          <div className="col-lg-5 col-md-12 col-12 mt-4">
            <div className="mt-4">
              <img
                className="img-fluid rounded-5 "
                src="https://cdn.dribbble.com/users/52884/screenshots/3588374/transform_dribbb.gif"
                alt=""
              />
            </div>
          </div>
        </div> 
        
      </div>
    </div>
  );
}
