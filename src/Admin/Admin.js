import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import toast, { Toast } from "react-hot-toast";
import { API_URL } from "../auth.service/auth.service";
import axios from "axios";


export default function Admin() {
  const navigate = useNavigate();

  // Admin sign in
  const loginSchema = Yup.object().shape({

    email: Yup.string().email().required(),
    password: Yup.string().required(),

  });


  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-header bg-dark">
    {/* heading */}
              <h5 className="modal-title text-light" id="exampleModalLabel">
                ADMIN PORTAL
              </h5>

              <button
                type="button"
                className="btn-close bg-danger"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">

              {/* this is form content */}

              <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={loginSchema}
            onSubmit={async (values) => {
              try {
                
                const {data: { adminauthToken },} = await axios.post(`${API_URL}/admin/login`, values);
               
                window.localStorage.setItem("AdminToken", adminauthToken);
                
                navigate("/ahome");
                
                toast.success("Admin Sign In Successfully");
              } catch ({ response: { data } }) {
            
                toast.error(data.error);
              }
            }}
          >
            {/* Formik Form validation */}

            {({ errors, touched }) => (
              <Form className="mb-3">
                <div className="d-flex flex-column gap-3">
                  {/* email */}
                  <div>
                    <Field
                      className="form-control text-center rounded-pill"
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  {errors.email && touched.email ? (
                    <span className="text-danger text-start ">
                      *{errors.email}*
                    </span>
                  ) : null}
                  {/* Password */}
                  <div>
                    <Field
                      className="form-control text-center rounded-pill"
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                  </div>
                  {errors.password && touched.password ? (
                    <span className="text-danger text-start">
                      *{errors.password}*
                    </span>
                  ) : null}
                  {/* button */}
                  <div className="">
                    <button
                      onClick={()=>navigate()}
                      type="submit"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      className="btn-lg w-50 btn btn-outline-success fw-bold rounded-pill"
                    >
                      SIGN IN
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>

              

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// <form>
//                 <div className="mb-3">
//                   <input
//                     type="email"
//                     placeholder="Email Address"
//                     className="form-control text-center"
//                     id="exampleInputEmail1"
//                     aria-describedby="emailHelp"
//                     required
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <input
//                     type="password"
//                     placeholder="Password"
//                     className="form-control text-center"
//                     id="exampleInputexampleInputPassword1"
//                     required
//                   />

//                   <button
//                     type="submit"
//                     className=" btn btn-success fw-bold mt-3"
//                     onClick={() => navigate("/Ahome")}
//                     data-bs-dismiss="modal"
//                   >
//                     SIGN IN
//                   </button>
//                 </div>
//               </form>