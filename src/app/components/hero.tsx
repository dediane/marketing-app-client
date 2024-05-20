import React from 'react'
import styles from '../styles/hero.module.css'
import localFont from 'next/font/local';
import { useRouter } from 'next/router';
import Image from 'next/image';
import button from '../styles/buttons.module.css'
import { motion } from 'framer-motion';
import landingIllustration from '../../../public/assets/landing.png';

const Belgiano = localFont({ src: '../../../public/fonts/Belgiano.ttf' })


export const Hero = () => {
    const router = useRouter();
    return (
        <motion.div
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{
                type: 'spring',
                stiffness: 50,
                damping: 20,
                duration: 0.5
            }}
            className={styles.container}>
            <div className={styles.heroWrapper}>
                <div className={styles.textContainer}>
                    <motion.h1
                        initial={{ opacity: 0, y: -80 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{
                            type: 'spring',
                            stiffness: 50,
                            damping: 50,
                            duration: 0.5,
                            delay: 0.5
                        }}
                        className={`${Belgiano.className} ${styles.title}`}>Social Media <br />made easy</motion.h1>
                    <p className={styles.subtitle}>Manage your social media accounts in one place</p>
                    <p className={styles.description}>All in one APP - Get started now!</p>
                    <div className={styles.buttonContainer}>
                        <button className={button.button_big_accent} onClick={() => router.push('/register')}>Start your free trial!</button>
                        <button className={button.button_big}>Learn more</button>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src={landingIllustration} alt="illustration social network hub" style={{ width: 'auto', height: '100%', objectFit: 'contain' }} />
                </div>
            </div>
        </motion.div>
    );
}

