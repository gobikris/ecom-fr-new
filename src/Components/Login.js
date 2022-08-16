import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { API_URL } from "../auth.service/auth.service";
import React from "react";
export default function Login() {
  const navigate = useNavigate();

  // signIn
  const signIn = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-sm-4 col-md-6 col-lg-4 rounded-3 back shadow-lg p-4 mt-5 ">
            <h2 className="text-center bg-warning rounded-2 mb-3">SIGN IN</h2>

            <Formik
              initialValues={{ email: "",password: "",}}
              validationSchema={signIn}
              onSubmit={async (values) => {
                try {

                  const {data: { authToken, message }} = await axios.post(`${API_URL}/auth/signin`,values);
                  window.localStorage.setItem("authToken", authToken);
                  window.localStorage.setItem("email", values.email);
                  navigate("/shop");
                  toast.success(message);

                } catch ({ response: { data } }) {
                  toast.error(data.error);
                }
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="d-flex flex-column gap-2 ">
                    {/* Email Address */}
                    <div className="form-floating mb-3 mt-3">
                      <Field
                        className="form-control border-0 rounded-pill"
                        type="email"
                        name="email"
                        placeholder="Email Address"
                      />
                      <label for="floatingInput">Email Address</label>
                      <div className="form-text text-center text-primary">
                        We'll never share your email with anyone else.
                      </div>
                    </div>
                    {errors.email && touched.email ? (
                      <span className="text-danger text-center">
                        *{errors.email}*
                      </span>
                    ) : null}

                    {/* Password */}
                    <div className="form-floating mb-3">
                      <Field
                        className="form-control border-0 rounded-pill"
                        type="password"
                        name="password"
                        placeholder="Password"
                      />
                      <label for="floatingInput">Password</label>
                    </div>

                    {errors.password && touched.password ? (
                      <span className="text-danger text-center">
                        *{errors.password}*
                      </span>
                    ) : null}

                    {/* submit  */}
                    <div className="">
                      <button
                        type="submit"
                        className="w-100 btn btn-danger  fw-bold rounded-pill p-3"
                      >
                        LOG IN
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
            <div className="d-flex mt-3 justify-content-between">
              <Link to="/signup" className="text-decoration-none">
                Don't have an account ?
              </Link>
                    
              <Link to="/forgot" className="text-decoration-none">
               Forgot Password ?
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
