import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess, setMessage } from '../store/userSlice';
import authService from '../services/auth-service';
import userService from '../services/user-service';

function Login() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e :any) => {
    e.preventDefault();
    try {
      const response = await userService.login(formData.email, formData.password);
      localStorage.setItem('authToken', response.data.token);
      dispatch(loginSuccess(response.data.token));
      dispatch(setMessage('Login successful'));
    } catch (error) {
      dispatch(setMessage('Error during login'));
    }
  };

  const handleChange = (e :any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;