import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from "react-redux";
import { registerUserAction } from "../../Auth/Auth.Action";
import {
  TextField,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  gender: '',
};

const validationSchema = Yup.object({
  firstName: Yup.string().required('First Name is required!'),
  lastName: Yup.string().required('Last Name is required!'),
  email: Yup.string().email('Invalid Email!').required('Email is required!'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required!'),
  gender: Yup.string().required('Gender is required!'),
});

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    console.log('handle Register', values);
    dispatch(registerUserAction({ data: values }))
      .then((res) => {
        // You can check res if your API sends success flag
        console.log('Registration successful');
        navigate('/login'); // Redirect to login
      })
      .catch((error) => {
        console.error('Registration failed', error);
        // Optionally show an error message to the user here
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ691-jsTTXRAmd0xWO3ym75cRTlTRa1Dxcmg&s";

  return (
    <div
      className="justify-center bg-cover bg-center p-2"
      style={{ backgroundImage: `url(${img})` }}>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        initialValues={initialValues}
      >
        {({ isSubmitting }) => (
          <Form className="mt-2">
            <div className="space-y-3">
              <div>
                <Field
                  as={TextField}
                  name="firstName"
                  placeholder="First Name"
                  fullWidth
                />
                <ErrorMessage name="firstName" component="div" className="text-red" />
              </div>

              <div>
                <Field
                  as={TextField}
                  name="lastName"
                  placeholder="Last Name"
                  fullWidth
                />
                <ErrorMessage name="lastName" component="div" className="text-red" />
              </div>

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

              <div>
                <FormControl>
                  <FormLabel>Gender</FormLabel>
                  <Field name="gender">
                    {({ field }) => (
                      <RadioGroup row {...field}>
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                      </RadioGroup>
                    )}
                  </Field>
                  <ErrorMessage name="gender" component="div" className="text-red" />
                </FormControl>
              </div>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>

      <div className='flex gap-5 justify-center mt-2'>
        <p>If you already have an account?</p>
        <button
          className="flex gap-5 justify-center mt-2"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Register;
