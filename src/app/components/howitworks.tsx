import React from 'react'
import styles from '../styles/howitworks.module.css'
import localFont from 'next/font/local';

const Belgiano = localFont({ src: '../../../public/fonts/Belgiano.ttf' })

export const HowItWorks = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <h2 className={`${styles.title} ${Belgiano.className}`}>How It Work</h2>
                    <div className={styles.stepsContainer}>
                        <div className={styles.step}>
                            <p className={`${styles.number} ${styles.number1}`}>1.</p>
                            <div className={styles.stepContent}>
                                <h3 className={styles.stepTitle}>Compare & Choose Your Plan</h3>
                                <p className={styles.stepDescription}>Explore our tailored plans. Whether you are a pro or a beginner, we have got the right package for you.</p>
                            </div>
                        </div>
                        <div className={styles.step}>
                            <p className={`${styles.number} ${styles.number2}`}>2.</p>
                            <div className={styles.stepContent}>
                                <h3 className={styles.stepTitle}>Try our app for Free for 14 Days</h3>
                                <p className={styles.stepDescription}>Dive into a no-obligation 14-day trial. Experience our features and see the difference firsthand.</p>
                            </div>
                        </div>
                        <div className={styles.step}>
                            <p className={`${styles.number} ${styles.number3}`}>3.</p>
                            <div className={styles.stepContent}>
                                <h3 className={styles.stepTitle}>Onboarding & Link Your Socials</h3>
                                <p className={styles.stepDescription}>With our simple onboarding, link your social media accounts in a few clicks and you are set.</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
