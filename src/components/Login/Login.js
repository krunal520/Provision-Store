import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; // Import your CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    // Basic email validation regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\d\s])[A-Za-z\d^\w\s]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must contain at least 8 characters, one uppercase, one lowercase, one digit, and one special character');
      return;
    }

    // Convert password to sha256 format (this is a placeholder, actual conversion method should be used)
    const sha256Password = sha256(password);

    const formData = new FormData();
    formData.append('username', email);
    formData.append('password', sha256Password);
    formData.append('grant_type', 'password');

    try {
      const response = await axios.post('https://apiv2stg.promilo.com/user/oauth/token', formData);
      // Handle successful login response
      console.log('Login successful!', response.data);
      // For example, store the access token in local storage
      localStorage.setItem('accessToken', response.data.access_token);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError('Invalid email or password');
      } else {
        setError('An error occurred during login. Please try again later.');
      }
    }
  };

  //sha256
  const sha256 = (password) => {
    const hash = crypto.createHash('sha256'); // Create a sha256 hash object
    hash.update(password); // Update the hash with the password
    return hash.digest('hex'); // Get the hashed password in hexadecimal format
  };

  return (
    <div className="login-container">
      <img className='img1' src='http://www.hindigraphics.in/wp-content/uploads/2019/01/pro.png' alt='' />
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Login;
