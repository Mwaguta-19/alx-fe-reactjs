import React, { useState } from 'react';

export const RegistrationForm = () => {
  // Manage form state with individual state for each field
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Manage error messages
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  // Handle change of input fields
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'username') {
      setUsername(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  // Validation checks in the format you requested
  const validationChecks = [
    "if (!username)", 
    "if (!email)", 
    "if (!password)"
  ];

  // Validate form fields
  const validateForm = () => {
    let valid = true;
    const newErrors = { username: '', email: '', password: '' };

    // Apply validation for username
    if (!username.trim()) {
      newErrors.username = 'Username is required';
      valid = false;
    }

    // Apply validation for email
    if (!email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is not valid';
      valid = false;
    }

    // Apply validation for password
    if (!password.trim()) {
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
      console.log('Form submitted successfully:', { username, email, password });

      // Reset form after submission
      setUsername('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h1>Registration Form</h1>

      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}  // Correct structure as required: value={username}
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
          value={email}  // Correct structure as required: value={email}
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
          value={password}  // Correct structure as required: value={password}
          onChange={handleChange}
        />
        {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
      </div>

      <button type="submit">Register</button>

      {/* Output the validation checks in the format you requested */}
      <div>
        <h2>Validation Checks:</h2>
        <pre>{JSON.stringify(validationChecks, null, 2)}</pre>
      </div>
    </form>
  );
};