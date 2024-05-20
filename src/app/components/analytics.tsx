import React from 'react'
import styles from '../styles/allinone.module.css'
import localFont from 'next/font/local';
import { useRouter } from 'next/router';
import Image from 'next/image';
import button from '../styles/buttons.module.css'

const Belgiano = localFont({ src: '../../../public/fonts/Belgiano.ttf' })

export const Analytics = () => {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.cardWrapper}>
                    <div className={styles.flex1}>
                        <Image src="/assets/analytics.jpg" alt="illustration social network hub" width={380} height={380} style={{ objectFit: "cover", borderRadius: 500 }} />
                    </div>
                    <div className={styles.flex1}>
                        <h2 className={Belgiano.className}>In-depth Analytics</h2>
                        <div className={styles.marginBottom}>
                            <p>Understand your audience with comprehensive insights and metrics.</p>
                            <p>Monitor the performances of your publication.</p>
                        </div>
                        <div>
                            <button className={button.button_accent_pink} onClick={() => router.push('/register')}>Get exclusive insight!</button>
                            <button className={button.button}>Learn more</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}