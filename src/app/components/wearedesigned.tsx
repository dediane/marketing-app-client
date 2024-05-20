import React from 'react'
import styles from '@/app/styles/wearedesigned.module.css'
import localFont from 'next/font/local';
import button from '../../app/styles/buttons.module.css'
import Image from 'next/image'

const Belgiano = localFont({ src: '../../../public/fonts/Belgiano.ttf' })

export const WeareDesigned = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h2 className={`${Belgiano.className} ${styles.title}`}>We are designed for</h2>
                <div className={styles.cardsContainer}>
                    <div className={styles.card}>
                        <Image src="/assets/pic1.jpg" alt="illustration" width={300} height={160} className={styles.cardImage} />
                        <h2 className={styles.cardTitle}>Business Owners Seeking Online Growth</h2>
                        <p className={styles.cardText}><b>✓ Optimize Social Media Presence:</b><br /> Elevate your brand's visibility across all leading platforms with our integrated tool.<br /></p>
                        <p className={styles.cardText}><b>✓ Data-Driven Growth:</b><br /> Harness actionable insights to understand your audience, boosting organic business growth online.<br /></p>
                        <p className={styles.cardText}><b>✓ Automated Content Scheduling:</b><br /> Plan weeks ahead, allowing more time for core business strategies.</p>
                        <div className={styles.cardButtonContainer}>
                            <button className={button.button_accent_blue}>Explore now</button>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <Image src="/assets/pic4.jpg" alt="illustration" width={300} height={160} className={styles.cardImage} />
                        <h2 className={styles.cardTitle}> Freelancers Enhancing Digital Profiles</h2>
                        <p className={styles.cardText}><b>✓ Unified Social Media Dashboard:</b><br />Effortlessly manage diverse accounts, catering to varied client needs.<br /></p>
                        <p className={styles.cardText}><b>✓ Affordable essential Social Media Tools:</b><br /> Premium features tailored to the freelancer budget.<br /></p>
                        <p className={styles.cardText}><b>✓ Client Collaboration Platform:</b><br /> Showcase and refine work with clients using real-time feedback.</p>
                        <div className={styles.cardButtonContainer}>
                            <button className={button.button_accent_blue}>Explore now</button>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <Image src="/assets/pic3.jpg" alt="illustration" width={300} height={160} className={styles.cardImage} />
                        <h2 className={styles.cardTitle}>Digital Agencies & Social Media Managers</h2>
                        <p className={styles.cardText}><b>✓ Team Collaboration Tools:</b><br /> Role-specific assignments, permissions management, and streamlined team efforts.<br /></p>
                        <p className={styles.cardText}><b>✓ Comprehensive Social Media Reporting:</b><br /> Deliver clear ROI with detailed analytics and adaptable reports.<br /></p>
                        <p className={styles.cardText}><b>✓ Efficient Multi-Account Handling:</b><br /> Seamlessly manage bulk campaigns and posts, supporting agency-level scalability.</p>
                        <div className={styles.cardButtonContainer}>
                            <button className={button.button_accent_blue}>Explore now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

