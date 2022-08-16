import React from 'react'

// import files


import axios from "axios";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Link, useNavigate, useParams } from "react-router-dom";

import { API_URL } from '../auth.service/auth.service';
import { toast } from 'react-hot-toast';

// reset-password
export default function RPassword() {
  // navigate to page
  const navigate = useNavigate();

  // state management
  const { id, token } = useParams();

  // reset password Schema
  const resetSchema = Yup.object().shape({
    password: Yup.string().required("Please enter your password"),
  });

  return (
    <div className="container">
      <div className="row justify-content-center mt-5 m-2">
        <div className="col-sm-4 col-md-6 col-lg-4 rounded-5 shadow-lg p-4 text-center">
          <h5 className="text-center">Reset your password?</h5>
          <img
            src="https://i.gifer.com/IPNp.gif"
            className="w-75 mb-2"
            alt=""
          />
          {/* Formik validation */}
          <Formik
            initialValues={{
              password: "",
            }}
            validationSchema={resetSchema}
            onSubmit={async (values) => {
              // api call
              try {
                await axios.post(
                  `${API_URL}/auth/reset/${id}/${token}`,
                  values
                );
                // navigate("/");
                toast.success("Password reset successfully");
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
                      className="form-control"
                      type="password"
                      name="password"
                      placeholder="Enter Your Password"
                    />
                  </div>
                  {errors.password && touched.password ? (
                    <span className="text-danger text-start">
                      *{errors.password}*
                    </span>
                  ) : null}
                  {/* submit button */}
                  <div className="">
                    <button
                      type="submit"
                      className="w-100 btn btn-outline-danger text-warning fw-bold"
                    >
                      Submit
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


