import React from 'react'
import axios from "axios";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API_URL } from '../auth.service/auth.service';
import { toast } from 'react-hot-toast';





export default function RPassword() {
  
  const navigate = useNavigate();

  // state management
  const { id, token } = useParams();

  // reset Password
  const resetSchema = Yup.object().shape({
    password: Yup.string().required("Please enter your password"),
  });

  return (
    <div className="container">
      <div className="row justify-content-center mt-5 m-2">
        <div className="col-sm-4 col-md-6 col-lg-4 rounded-4 order shadow-lg p-4 text-center">
          <h5 className="text-center bg-warning rounded-pill fw-bold p-2">RESET PASSWORD </h5>
          <img
            src="https://cdn.dribbble.com/users/736081/screenshots/2334152/mail-app-400x300.gif"
            className="w-75 mb-3 rounded-5 "
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
                navigate("/");
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
                      className="form-control rounded-pill p-3 mb-2"
                      type="password"
                      name="password"
                      placeholder="Enter New Password"
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
                      className="w-50 btn btn-danger rounded-pill btn-lg fw-bold"
                    >
                      SEND
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


