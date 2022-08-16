
import { useNavigate } from 'react-router-dom';
import Footer from './footer';

export default function Contact() {
const navigate = useNavigate()

  return (
    <div>
      <div className="container">
        
        <div className="row mt-3">
        <i className="fa fa-2x fa-arrow-left cur" aria-hidden="true" onClick={()=>navigate("/")}></i>
          <div className="d-flex gap-3 justify-content-center">
          
          <h1 className="text-center">Contact Us</h1>
          </div>
        
        
          <div className="col-lg-5 col-md-12 col-12 mt-4 m-auto">

            <h5 className="mt-2 text-center">LEAVE A MESSAGE</h5>
            <form>
              {/* name */}
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Your Name</label>
              </div>

              {/* email */}
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingInput ">Email Address</label>
              </div>

              {/* subject */}
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingInput ">Subject</label>
              </div>

              {/* comments */}
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
              
            </div>
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
        <Footer/>
      </div>
    </div>
  );
}
