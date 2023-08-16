import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerSuccess, setMessage } from '../store/userSlice';
import userService from '../services/user-service';
import { Router, useRouter } from 'next/router';

function Register() {
  const dispatch = useDispatch();
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e :any) => {
    e.preventDefault();
    try {
      const response = await userService.register(
        formData.first_name,
        formData.last_name,
        formData.email, 
        formData.password);
      localStorage.setItem('authToken', response.data.token);
      dispatch(registerSuccess(response.data.token));
      dispatch(setMessage('Registration successful'));
      router.push('/dashboard');
    } catch (error) {
      dispatch(setMessage('Error during registration'));
    }
  };

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input 
            type="text" 
            name="first_name" 
            value={formData.first_name} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input 
            type="text" 
            name="last_name" 
            value={formData.last_name} 
            onChange={handleChange} 
          />
        </div>
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
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;