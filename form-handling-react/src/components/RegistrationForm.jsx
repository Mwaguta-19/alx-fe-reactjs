import React, {useState} from 'react'

export const RegistrationForm = () => {

    const [formData, setFormData]= useState({
        username:'',
        name: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: "",

    });

    const handleChange = (e) => {

        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    }

     // Basic validation function to check if any fields are empty
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

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Validate form before submission
        if (validateForm()) {
          // Simulate form submission (e.g., API call)
          console.log('Form submitted successfully:', formData);
    
          // Reset form
          setFormData({
            username: '',
            email: '',
            password: '',
          });
        }
      };

        
  return (
    <form className ="create" onSubmit={handleSubmit}>
    <h1>Registration Form</h1>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
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
          value={formData.email}
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
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
      </div>

      <button type="submit">Register</button>
    </form>
    
  );
}
