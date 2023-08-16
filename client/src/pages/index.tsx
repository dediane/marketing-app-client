import Image from 'next/image'
import styles from './page.module.css'
import Login from '../app/components/login'
import Register from '../app/components/register'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { RootState } from '@/app/store/userSlice';
import Authentication from '@/app/components/authentication';
import Landing from './landing';

export default function Home() {
  const router = useRouter();
  const isAuthenticated = useSelector((state :RootState) => state.user.isAuthenticated );
  useEffect(() => {
    if (isAuthenticated) {
      // Redirect to another page if authenticated
      router.push('/dashboard');
    }
}, [isAuthenticated]);
  return (
    <main >
      <Landing />
    </main>
  )
}
