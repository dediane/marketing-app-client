import Navbar from "@/app/components/navbar";
import React from "react";
import styles from '../app/styles/pricing.module.css';
import buttons from '../app/styles/buttons.module.css';
import localFont from 'next/font/local';
import {IoCheckmark, IoCheckmarkCircle } from 'react-icons/io5';

const Belgiano = localFont({ src: '../../public/fonts/Belgiano.ttf'})


export default function pricing() {
    return (
        <>
        <Navbar />
        <Header />
        <PricingTable />
        </>
    )
}


const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.center}>
                <h1 style={{padding: 10, margin: 10, fontSize: 38}} className={Belgiano.className}>Choose your Plan</h1>
                <p className={styles.subtitle}>Tailored solutions for every stage of your social media journey.</p>
                <p style={{padding: 4, margin: 8}}> Start with a 14-day free trial. No credit card required.</p>
            </div>
        </div>
    )
}

const PricingTable = () => {
    return (
        <div className={`${styles.container}`}>
            <div className={styles.cardContainer}>
            <PricingCard />
            <PricingCard2 />
            <PricingCard3 />
            </div>
        </div>
    )
}

const PricingCard = () => {
    return (
        <div className={styles.pricingCard}>
            <div className={`${styles.pricingHeader}`}>
                <p>Best for Individuals & New Influencers</p>
            </div>
            <div style={{display: "flex", flexDirection: "column", alignItems: 'center', paddingTop: 20}}>
                <h1 className={Belgiano.className}>Starter</h1>
                <div style={{display:'flex', flexDirection: 'row', margin: 10}}>
                        <h3 style={{fontSize: 34}}>$19.99</h3><p style={{padding: 10}}>/mo</p>
                </div>
                    <div style={{justifyContent: "left", padding: 14}}>
                        <p style={{ fontSize: 16, fontWeight: 300, paddingBottom: 12}}>Perfect for individuals or budding influencers looking to make their mark.</p>
                        <p style={{paddingBottom: 8}}> 1 account for each Social Media</p>
                        <p> 1 user</p>
                    </div>
                    <button className={buttons.button_accent} style={{paddingLeft: 50, paddingRight: 50}}>Start Free Trial</button>

            </div>
        </div>
    )
}

const PricingCard2 = () => {
    return (

            <div className={styles.pricingCard} style={{scale: '1.05', marginLeft: 25, marginRight: 25}}>
                <div className={`${styles.pricingHeader} `} >
                    <p>Best for Influencers & Startups</p>
                </div>
                <div style={{display: "flex", flexDirection: "column", alignItems: 'center', paddingTop: 20}}>
                    <h1 className={Belgiano.className}>Growth</h1>
                        <div style={{display:'flex', flexDirection: 'row', margin: 10}}>
                            <h3 style={{fontSize: 34}}>$49.99</h3><p style={{padding: 10}}>/mo</p>
                        </div>
                        <p style={{padding: 14, fontSize: 16, fontWeight: 300}}>Designed for startups and influencers ready to expand their digital footprint.</p>
                        <button className={buttons.button_accent} style={{paddingLeft: 50, paddingRight: 50}}>Start Free Trial</button>
                </div>
            </div>
    )
}


const PricingCard3 = () => {
    return (
        <div className={styles.pricingCard}>
            <div className={`${styles.pricingHeader} ${styles.bgBlack}`}>
                <p>Best for entreprises</p>
            </div>
            <div style={{display: "flex", flexDirection: "column", alignItems: 'center', paddingTop: 20}}>
                <h1 className={`${Belgiano.className}`}>Business</h1>
                <div style={{display:'flex', flexDirection: 'row', margin: 10}}>
                        <h3 style={{fontSize: 20, marginTop: 10, marginBottom: 10}}>Custom pricing</h3>
                    </div>
                    <p style={{padding: 14, fontSize: 16, fontWeight: 300}}>Tailored solutions for enterprises with specific needs.</p>
                    <button className={buttons.button_accent} style={{backgroundColor: '#000000', color: '#ffffff'}}> Let&apos;s design your package!</button>
            </div>
        </div>
    )
}

const PricingComparison = () => {
    return (
        <div>
            <h1>PricingComparison</h1>
        </div>
    )
}