import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField } from '@mui/material';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginUserAction } from "../../Auth/Auth.Action";


const initialValues = {email: "",password: ""};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid Email!")
    .required("Email is Required!"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is Required!")
});

function Login() {
  const [formValue, setFormValue] = useState();
  const dispatch=useDispatch();


  const handleSubmit = (values) => {
    console.log("handle Login", values);
    dispatch(loginUserAction({data:values}))
  };

  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        initialValues={initialValues}
      >
        {() => (
          <Form className="space-y-5">
            <div className="space-y-5">
              <div>
                <Field
                  as={TextField}
                  name="email"
                  placeholder="Email"
                  type="email"
                  fullWidth
                />
                <ErrorMessage name="email" component="div" className="text-red" />
              </div>

              <div>
                <Field
                  as={TextField}
                  name="password"
                  placeholder="Password"
                  type="password"
                  fullWidth
                />
                <ErrorMessage name="password" component="div" className="text-red" />
              </div>
            </div>

            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Login
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Login;
