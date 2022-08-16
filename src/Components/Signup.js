import axios from "axios";
import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { formReducer } from "../store/form.service";
import { toast } from "react-hot-toast"
import { API_URL } from "../auth.service/auth.service";
 
export default function Signup() {
 // navigate function
 const navigate = useNavigate();

 // form state management with help reducer
 const [form, setForm] = useReducer(formReducer, {
   fullname:"",
   email: "",
   contact:"",
   password: "",
   
 });

 // form submit
 const handleSubmit = async (event) => {
   event.preventDefault();
   
   try {
    const {data : {message}} = await axios.post(`${API_URL}/auth/signup`, form); 
     navigate('/signin');
     toast.success(message);
    //  alert(message);
    
   
   } catch (error) {
     console.log(error.message);
     toast.error(error.message);
   }
 };
  return (
    <div>
      <div className="container">
      
        <div className="row justify-content-center mt-5">
        
          <div className="col-lg-5 col-md-7 mt-3">
          
            <form  onSubmit={handleSubmit} className="d-flex flex-column shadow-lg p-5 back rounded-5">
              {/* name */}
              
              <h3 className="text-center mb-4 bg-warning rounded-3 p-2">
                Create An Account
              </h3>
              <div className="form-floating mb-3">
                <input
                  type="name"
                  name="fullname"
                  onChange={setForm}
                  className="form-control text-center border-0 rounded-pill"
                  placeholder="Full Name"
                  required
                />
                <label for="floatingInput">Full Name</label>
                <div className="form-text">
                  We'll never share your data with anyone else.
                </div>
              </div>

              {/* email */}

              <div className="form-floating mb-3">
                <input
                  type="email"
                  name="email"
                  id="email"
                  
                  onChange={setForm}
                  className="form-control text-center border-0 rounded-pill"
                  placeholder="Email Address"
                  required
                />
                <label for="floatingInput">Email Address</label>
              </div>

              {/* contact */}

              <div className="form-floating mb-3">
                <input
                  type="number"
                  name="contact"
                  id="contact"
                 
                  onChange={setForm}
                  className="form-control text-center border-0 rounded-pill"
                  placeholder="Contact No"
                  required
                />
                <label for="floatingInput">Contact No</label>
              </div>

              {/* password */}

              <div className="form-floating mb-3">
                <input
                  type="password"
                  name="password"
                  
                  id="password"
                  onChange={setForm}
                  className="form-control text-center border-0 rounded-pill"
                  placeholder="Password"
                  required
                />
                <label for="floatingInput">Password</label>
              </div>

              <button
                type="submit"
                className="btn btn-danger  fw-bold p-2 rounded-pill"
              >
                SIGN UP
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

