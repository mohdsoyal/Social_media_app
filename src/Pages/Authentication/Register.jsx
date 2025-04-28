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

  const dispatch=useDispatch();

  const handleSubmit = (values) => {
    console.log('handle Login', values);
    dispatch(registerUserAction({data:values}))
  };

  return (
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

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default Register;
