import React from 'react'
import styles from '../styles/allinone.module.css'
import localFont from 'next/font/local';
import { useRouter } from 'next/router';
import Image from 'next/image';
import button from '../styles/buttons.module.css'

const Belgiano = localFont({ src: '../../../public/fonts/Belgiano.ttf' })

export const PlanSchedule = () => {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.cardWrapper}>
                    <div className={styles.flex1}>
                        <h2 className={Belgiano.className}>Plan and Schedule. <br />Never forget.</h2>
                        <div className={styles.marginBottom}>
                            <p>All your accounts. One view. No hassle.</p>
                            <p> We brings all your social media feeds into one convenient dashboard.</p>
                        </div>
                        <div>
                            <button className={button.button_accent} onClick={() => router.push('/register')}>Start planning your first Post!</button>
                            <button className={button.button}>Learn more</button>
                        </div>
                    </div>
                    <div className={styles.imageContainer}>
                        {/* <Image src={landingIllustration} alt="illustration social network hub" style={{width: 'auto', height: '100%', objectFit: 'contain'}}/> */}
                        <Image src="/assets/plan.jpg" alt="illustration social network hub" width={380} height={380} style={{ objectFit: "cover", borderRadius: 500 }} />
                    </div>

                </div>
            </div>
        </div>
    )
}
