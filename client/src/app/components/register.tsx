import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerSuccess, setMessage } from '../store/userSlice';
// import userService from '../services/user-service';
import { Router, useRouter } from 'next/router';
import styles from '../styles/login.module.css'
import buttons from '../styles/buttons.module.css'
import localFont from 'next/font/local';
import Link from 'next/link';


const Belgiano = localFont({ src: '../../../public/fonts/Belgiano.ttf'})

function Register() {
  // const dispatch = useDispatch();
  // const router = useRouter();
  
  // const [formData, setFormData] = useState({
  //   first_name: '',
  //   last_name: '',
  //   email: '',
  //   password: '',
  //   password_confirmation: '',
  // });

  // const handleSubmit = async (e :any) => {
  //   if (formData.password !== formData.password_confirmation) {
  //     dispatch(setMessage('Passwords do not match'));
  //     return;
  //   }
  //   e.preventDefault();
  //   try {
  //     const response = await userService.register(
  //       formData.first_name,
  //       formData.last_name,
  //       formData.email, 
  //       formData.password);
  //     localStorage.setItem('authToken', response.data.token);
  //     dispatch(registerSuccess(response.data.token));
  //     dispatch(setMessage('Registration successful'));
  //     router.push('/dashboard');
  //   } catch (error) {
  //     dispatch(setMessage('Error during registration'));
  //   }
  // };

  // const handleChange = (e: any) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  return (
    <div className={styles.card} style={{padding: 50}}>
      <h2 className={Belgiano.className} style={{fontSize: 36}}>Join [APP NAME] Today!</h2>
      <h4 style={{fontWeight: 300, fontSize: 18, marginTop: 4, marginBottom: 30}}>Create an account to get started.</h4>
      {/* <form onSubmit={handleSubmit}> */}
      <form>
        <div style={{display: 'flex', flexDirection: 'row'}}>
        <div style={{marginBottom: 10, marginRight: 20}}>
          <label>First Name</label>
          <input 
            type="text" 
            name="first_name" 
            placeholder='John'
            // value={formData.first_name} 
            // onChange={handleChange}
            className={styles.input}
            />
        </div>
        <div style={{marginBottom: 10}}>
          <label>Last Name</label>
          <input 
            type="text" 
            name="last_name" 
            placeholder='Smith'
            // value={formData.last_name} 
            // onChange={handleChange} 
            className={styles.input}
            />
        </div>
        </div>
        <div style={{marginBottom: 10}}>
          <label>Email</label>
          <input 
            type="email" 
            name="email" 
            placeholder='johnsmith@example.com'
            // value={formData.email} 
            // onChange={handleChange}
            className={styles.input}
          />
        </div>
        <div style={{marginBottom: 10}}>
          <label>Password</label>
          <input 
            type="password" 
            name="password"
            placeholder='••••••' 
            // value={formData.password} 
            // onChange={handleChange} 
            className={styles.input}
          />
        </div>
        <div style={{marginBottom: 10}}>
          <label>Confirm Password</label>
          <input 
            type="password" 
            name="password_confirmation"
            placeholder='••••••'
            // value={formData.password_confirmation} 
            // onChange={handleChange} 
            className={styles.input}
          />
        </div>
        <div style={{marginTop: 40}}>
          <button type="submit" className={buttons.button_accent} style={{width: '100%', margin: 0}}>Create my account</button>
          <p style={{color: 'grey', marginTop: 16, fontSize: 14}}>You have an account? <Link href='/login' className={styles.link}>Log in to your account!</Link></p>
        </div>
      </form>
    </div>
  );
}

export default Register;