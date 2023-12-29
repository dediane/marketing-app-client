import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess, setMessage } from '../store/userSlice';
import authService from '../services/auth-service';
import userService from '../services/user-service';
import button from '@/app/styles/buttons.module.css'
import localFont from 'next/font/local';
import Link from 'next/link';
import styles from '../styles/login.module.css'

const Belgiano = localFont({ src: '../../../public/fonts/Belgiano.ttf'})

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
    <div className={styles.card}>
      <h2 className={Belgiano.className} style={{fontSize: 36}}>Welcome Back!</h2>
      <h4 style={{fontWeight: 300, fontSize: 18, marginTop: 4, marginBottom: 30}}>Log in to continue</h4>
      <form onSubmit={handleSubmit}>
        <div style={{marginBottom: 20}}>
          <label style={{fontSize: 18, fontWeight: 300}}>Email address<br/></label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            className={styles.input}
          />
        </div>
        <div style={{marginBottom: 20, marginTop: 30}}>
          <label style={{fontSize: 18, fontWeight: 300}}>Password<br/></label>
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            className={styles.input}
          />
          <Link href='#' style={{ fontSize: 14, textDecoration: 'none', color: 'grey'}}>Forgot password?</Link>
        </div>
        <div style={{marginTop: 60}}>
          <button className={button.button_accent} style={{width: '100%', margin: 0}} type="submit">Log in</button>
          <p style={{color: 'grey', marginTop: 16, fontSize: 14}}>No account? <Link href='/register' className={styles.link}>Create your account now for Free!</Link></p>
        </div>
      </form>
    </div>
  );
}

export default Login;