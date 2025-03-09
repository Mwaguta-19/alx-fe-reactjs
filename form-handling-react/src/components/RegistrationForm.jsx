import React, { useState } from 'react';

export const RegistrationForm = () => {
  // Manage form state
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  // Manage error messages
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  // Handle change of input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validate form fields
  const validateForm = () => {
    let valid = true;
    const newErrors = { username: '', email: '', password: '' };

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is not valid';
      valid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form before submission
    if (validateForm()) {
      // Simulate form submission (e.g., API call)
      console.log('Form submitted successfully:', formData);

      // Reset form after submission
      setFormData({
        username: '',
        email: '',
        password: '',
      });
    }
  };

  // Destructure formData for easier access
  const { username, email, password } = formData;

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h1>Registration Form</h1>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username} // Destructured variable
          onChange={handleChange}
        />
        {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email} // Destructured variable
          onChange={handleChange}
        />
        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password} // Destructured variable
          onChange={handleChange}
        />
        {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
};