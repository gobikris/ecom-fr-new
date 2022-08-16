// import files
import React from "react";

import axios from "axios";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../auth.service/auth.service";
import { toast } from 'react-hot-toast';

// forget password
export default function ForgetPassword() {
  // navigate to page
  const navigate = useNavigate();

  // email Schema
  const emailSchema = Yup.object().shape({
    email: Yup.string().email().required(),
  });

  return (
    <div className="container">
      
      <div className="row justify-content-center mt-5 m-2">
        <div className="col-sm-4 col-md-6 col-lg-4 rounded-3 shadow-lg p-4 text-center border order">
          <h5 className="text-center bg-warning rounded p-2 fw-bold">Forget password</h5>
       
          <img
            src="https://cdn.dribbble.com/users/1741026/screenshots/6549026/nest_forgot_password_dribbble.gif"
            className="w-50 rounded-circle mb-2"
            alt=""
          />
          {/* Formik validation  */}
          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={emailSchema}
            onSubmit={async (values) => {
              console.log(values);
              try {
                await axios.post(`${API_URL}/auth/forget`, values);
                navigate("/");
                toast.success("Check Register Email");
              } catch (error) {
                console.log(error.message);
              }
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="d-flex flex-column gap-2">
                  {/* email */}
                  <div>
                    <Field
                      className="form-control p-3 rounded-pill"
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  {errors.email && touched.email ? (
                    <span className="text-danger text-start">
                      *{errors.email}*
                    </span>
                  ) : null}
                  {/* submit button */}
                  <div className="">
                    <button
                      type="submit"
                      className="w-100 btn btn-danger rounded-pill p-2 fw-bold"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}