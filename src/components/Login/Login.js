import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // validation for email
  const validateEmail = (email) => {

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // validation for an password 
  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\d\s]).{8,}$/;
    return regex.test(password);
  };

  const sha256 = async (password) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);

    const buffer = await crypto.subtle.digest('SHA-256', data);

    const hashArray = Array.from(new Uint8Array(buffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');

    return hashHex;
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

    const sha256Password = await sha256(password);

    const formData = new FormData();
    formData.append('username', email);
    formData.append('password', sha256Password);
    formData.append('grant_type', 'password');

    try {
      const response = await axios.post('https://apiv2stg.promilo.com/user/oauth/token', formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic UHJvbWlsbzpxNCE1NkBaeSN4MiRHQg=='
        }
      });
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
