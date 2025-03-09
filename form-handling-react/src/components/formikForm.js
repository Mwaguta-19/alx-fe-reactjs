import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Define validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string()
    .email('Email is not valid')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const FormikForm = () => {
  // Handle form submission
  const handleSubmit = (values) => {
    // Simulate form submission (e.g., API call)
    console.log('Form submitted successfully:', values);
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="create">
          <div>
            <label htmlFor="username">Username:</label>
            <Field
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
            />
            <ErrorMessage
              name="username"
              component="span"
              style={{ color: 'red' }}
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
            <ErrorMessage
              name="email"
              component="span"
              style={{ color: 'red' }}
            />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
            <ErrorMessage
              name="password"
              component="span"
              style={{ color: 'red' }}
            />
          </div>

          <button type="submit">Register</button>

          {/* Display validation checks in the requested format */}
          <div>
            <h2>Validation Checks:</h2>
            <pre>{JSON.stringify(validationSchema, null, 2)}</pre>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikForm;