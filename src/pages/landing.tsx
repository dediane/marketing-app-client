import { Provider } from 'react-redux'
import styles from '../app/styles/landing.module.css'
import button from '../app/styles/buttons.module.css'
import React, { useContext, useEffect, useRef, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { IoMenuOutline, IoLogoInstagram, IoLogoFacebook, IoLogoTiktok, IoLogoPinterest, IoLogoTwitter, IoRocketOutline } from 'react-icons/io5';
import useWindowSize from '@/app/hooks/windowSize';
import { Router, useRouter } from 'next/router'
import landingIllustration from '../../public/assets/landing.png';
import centralize from '../../public/assets/Buffer.gif'
import localFont from 'next/font/local'
import Footer from '@/app/components/footer';
import Navbar from '@/app/components/navbar';
import { motion } from 'framer-motion';
import { HowItWorks } from '@/app/components/howitworks';
import { WeareDesigned } from '@/app/components/wearedesigned';
import AllInOne from '@/app/components/allinone';
import { PlanSchedule } from '@/app/components/planschedule';
import { Analytics } from '@/app/components/analytics';
import { Hero } from '@/app/components/hero';

const Belgiano = localFont({ src: '../../public/fonts/Belgiano.ttf' })

export const Logos = () => {
    const logos = [<IoLogoInstagram key="instagram" />, <IoLogoFacebook key="facebook" />, <IoLogoTiktok key="tiktok" />, <IoLogoTwitter key="twitter" />, <IoLogoPinterest key="pinterest" />]
    return (
        <div className={styles.logoDiv} >
            <div className={styles.carousel}>
                <div className={styles.carouselInner}>
                    {logos.map((item, idx) => (
                        <div key={idx} className={styles.carouselItem}>
                            {item}
                        </div>))}
                    {logos.map((item, idx) => (
                        <div key={idx} className={styles.carouselItem}>
                            {item}
                        </div>))}
                    {logos.map((item, idx) => (
                        <div key={idx} className={styles.carouselItem}>
                            {item}
                        </div>))}
                    {logos.map((item, idx) => (
                        <div key={idx} className={styles.carouselItem}>
                            {item}
                        </div>))}
                </div>
            </div>
        </div>
    )
}

const StartFreeTrial = () => {
    const router = useRouter();
    const items = [
        { text: 'Start your free trial', icon: <IoRocketOutline key='1'/> },
        { text: 'Start your free trial', icon: <IoRocketOutline key='2'/> },
        { text: 'Start your free trial', icon: <IoRocketOutline key='3'/> },
        { text: 'Start your free trial', icon: <IoRocketOutline key='4'/> },
        { text: 'Start your free trial', icon: <IoRocketOutline key='5'/> },
        { text: 'Start your free trial', icon: <IoRocketOutline key='6'/> },
        { text: 'Start your free trial', icon: <IoRocketOutline key='7'/> },
        { text: 'Start your free trial', icon: <IoRocketOutline key='8'/> },
        { text: 'Start your free trial', icon: <IoRocketOutline key='9'/> }]

    return (
        <div className={styles.logoDiv2} onClick={() => router.push('/register')}>
            <div className={styles.carousel}>
                <div className={styles.carouselInner2}>
                    {items.map((item, idx) => (
                        <div key={idx} className={styles.carouselItem2} style={{display: 'flex'}}>
                            {item.text}
                            <div style={{paddingLeft: 50}}>{item.icon}</div>
                        </div>))}

                    {items.map((item, idx) => (
                        <div key={idx} className={styles.carouselItem2} style={{display: 'flex'}}>
                        {item.text}
                        <div style={{paddingLeft: 50}}>{item.icon}</div>
                    </div>))}
                </div>
            </div>
        </div>
    )
}





const Main = () => {
    return (
        <>
            <Hero />
            <Logos />
            <AllInOne />
            <PlanSchedule />
            <Analytics />
            <HowItWorks />
            <StartFreeTrial />
            <WeareDesigned />
        </>
    )
}

export default function Landing() {
    return (
        <>
            <Navbar />
            <Main />
            <Footer />
        </>
    )
}