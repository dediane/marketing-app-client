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

const Belgiano = localFont({ src: '../../public/fonts/Belgiano.ttf' })


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
            <div style={{ height: 'calc(100vh - 66px)', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ flex: 1, marginLeft: 120 }}>
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
                        className={Belgiano.className} style={{ fontSize: 80, paddingBottom: '40px' }}>Social Media <br></br>made easy</motion.h1>
                    <p style={{ fontSize: 18, marginBottom: '10px', fontWeight: 300 }}>Manage your social media accounts in one place</p>
                    <p style={{ fontSize: 18, marginBottom: '40px', fontWeight: 300 }}>All in one APP - Get started now!</p>
                    <div>
                        <button className={button.button_big_accent} onClick={() => router.push('/register')}>Start your free trial!</button>
                        <button className={button.button_big}>Learn more</button>
                    </div>
                </div>
                <div style={{ flex: 1, marginRight: 120 }} className={styles.imageContainer}>
                    <Image src={landingIllustration} alt="illustration social network hub" style={{ width: 'auto', height: '100%', objectFit: 'contain' }} />
                </div>
            </div>
        </motion.div>
    );
}

export const Background = () => {
    return (
        <>

        </>
    );
}

export const Logos = () => {
    const logos = [<IoLogoInstagram />, <IoLogoFacebook />, <IoLogoTiktok />, <IoLogoTwitter />, <IoLogoPinterest />]
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
    const items = ['Start your free trial', <IoRocketOutline />, 'Start your free trial', <IoRocketOutline />, 'Start your free trial', <IoRocketOutline />, 'Start your free trial', <IoRocketOutline />, 'Start your free trial', <IoRocketOutline />, 'Start your free trial', <IoRocketOutline />, 'Start your free trial', <IoRocketOutline />, 'Start your free trial', <IoRocketOutline />,]
    return (
        <div className={styles.logoDiv2} onClick={() => router.push('/register')}>
            <div className={styles.carousel}>
                <div className={styles.carouselInner2}>
                    {items.map((item, idx) => (
                        <div key={idx} className={styles.carouselItem2}>
                            {item}
                        </div>))}
                    {items.map((item, idx) => (
                        <div key={idx} className={styles.carouselItem2}>
                            {item}
                        </div>))}
                </div>
            </div>
        </div>
    )
}

export const AllInOne = () => {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.cardWrapper}>
                    <div className={styles.imageContainer}>
                        <Image src="/assets/social.jpg" alt="illustration social network hub" width={380} height={380} style={{ objectFit: "cover", borderRadius: 500 }} />

                        {/* <Image src={centralize} alt="illustration social network hub" style={{width: 'auto', height: '500PX', objectFit: 'contain'}}/> */}
                    </div>
                    <div style={{ flex: 1 }}>
                        <h2 className={Belgiano.className}>Centralize your <br />social media management</h2>
                        <div style={{ marginBottom: '60px' }}>
                            <p>All your accounts. One view. No hassle.</p>
                            <p> We brings all your social media feeds into one convenient dashboard.</p>
                        </div>
                        <div>
                            <button className={button.button_accent_blue} onClick={() => router.push('/register')}>Discover our dashboard!</button>
                            <button className={button.button}>Learn more</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export const PlanSchedule = () => {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.cardWrapper}>
                    <div style={{ flex: 1 }}>
                        <h2 className={Belgiano.className}>Plan and Schedule. <br />Never forget.</h2>
                        <div style={{ marginBottom: '60px' }}>
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

export const Analytics = () => {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.cardWrapper}>
                    <div style={{ flex: 1 }}>
                        <Image src="/assets/analytics.jpg" alt="illustration social network hub" width={380} height={380} style={{ objectFit: "cover", borderRadius: 500 }} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <h2 className={Belgiano.className}>In-depth Analytics</h2>
                        <div style={{ marginBottom: '60px' }}>
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

const WeareDesigned = () => {
    return (
        <div className={styles.container}>
            <div style={{ marginLeft: 120, marginTop: 50, marginBottom: 50, marginRight: 120, maxWidth: '1200px' }}>
                <h2 className={Belgiano.className} style={{ fontSize: 46, marginBottom: '20px' }}>We are designed for</h2>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ padding: 30, marginLeft: 10, marginRight: 10, flex: 1 }}>
                    <Image src="/assets/pic1.jpg" alt="illustration" width={300} height={160} style={{objectFit: 'cover', borderRadius: "20px", marginLeft: 'auto', marginRight: 'auto', marginBottom: '10px'}} />
                        <h2 style={{ fontWeight: 200, fontSize: 24, marginBottom: 20 }}>Business Owners Seeking Online Growth</h2>
                        <p style={{ marginBottom: 20, fontWeight: 200 }}><b>✓ Optimize Social Media Presence:</b><br /> Elevate your brand's visibility across all leading platforms with our integrated tool.<br /></p>
                        <p style={{ marginBottom: 20, fontWeight: 200 }}><b>✓ Data-Driven Growth:</b><br /> Harness actionable insights to understand your audience, boosting organic business growth online.<br /></p>
                        <p style={{ marginBottom: 20, fontWeight: 200 }}><b>✓ Automated Content Scheduling:</b><br /> Plan weeks ahead, allowing more time for core business strategies.</p>
                        <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', margin: 20 }}>
                            <button className={button.button_accent_blue}>Explore now</button>
                        </div>
                    </div>
                    <div style={{ padding: 30, marginLeft: 10, marginRight: 10, flex: 1 }}>
                        <Image src="/assets/pic4.jpg" alt="illustration" width={300} height={160} style={{objectFit: 'cover', borderRadius: "20px", marginLeft: 'auto', marginRight: 'auto', marginBottom: '10px'}} />
                        <h2 style={{ fontWeight: 200, fontSize: 24, marginBottom: 20 }}> Freelancers Enhancing Digital Profiles</h2>
                        <p style={{ marginBottom: 20, fontWeight: 200 }}><b>✓ Unified Social Media Dashboard:</b><br />Effortlessly manage diverse accounts, catering to varied client needs.<br /></p>
                        <p style={{ marginBottom: 20, fontWeight: 200 }}><b>✓ Affordable essential Social Media Tools:</b><br /> Premium features tailored to the freelancer budget.<br /></p>
                        <p style={{ marginBottom: 20, fontWeight: 200 }}><b>✓ Client Collaboration Platform:</b><br /> Showcase and refine work with clients using real-time feedback.</p>
                        <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', margin: 20 }}>
                            <button className={button.button_accent_blue}>Explore now</button>
                        </div>
                    </div>
                    <div style={{ padding: 30, marginLeft: 10, marginRight: 10, flex: 1 }}>
                    <Image src="/assets/pic3.jpg" alt="illustration" width={300} height={160} style={{objectFit: 'cover', borderRadius: "20px", marginLeft: 'auto', marginRight: 'auto', marginBottom: '10px'}} />
                        <h2 style={{ fontWeight: 200, fontSize: 24, marginBottom: 20 }}>Digital Agencies & Social Media Managers</h2>
                        <p style={{ marginBottom: 20, fontWeight: 200 }}><b>✓ Team Collaboration Tools:</b><br /> Role-specific assignments, permissions management, and streamlined team efforts.<br /></p>
                        <p style={{ marginBottom: 20, fontWeight: 200 }}><b>✓ Comprehensive Social Media Reporting:</b><br /> Deliver clear ROI with detailed analytics and adaptable reports.<br /></p>
                        <p style={{ marginBottom: 20, fontWeight: 200 }}><b>✓ Efficient Multi-Account Handling:</b><br /> Seamlessly manage bulk campaigns and posts, supporting agency-level scalability.</p>
                        <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', margin: 20 }}>
                            <button className={button.button_accent_blue}>Explore now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const HowItWorks = () => {
    return (
        <>
            <div className={styles.container}>
                <div style={{ marginLeft: 120, marginTop: 50, marginBottom: 50, marginRight: 120 }}>
                    <h2 className={Belgiano.className} style={{ fontSize: 46, marginBottom: '40px' }}>How It Work</h2>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>

                        <div style={{ display: 'flex', flexDirection: 'row', margin: 20 }}>
                            <p className={styles.number} style={{ color: '#C4F7A1', textShadow: '1px 1px 1px black' }}>1.</p>
                            <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: 20 }}>
                                <h3 style={{ fontWeight: 200, fontSize: 24, marginTop: 20, marginBottom: 20 }}>Compare & Choose Your Plan</h3>
                                <p style={{ fontWeight: 300 }}>Explore our tailored plans. Whether you're a pro or a beginner, we've got the right package for you.</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', margin: 20 }}>
                            <p className={styles.number} style={{ color: '#b5eaff', textShadow: '1px 1px 1px black' }}>2.</p>
                            <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: 20 }}>
                                <h3 style={{ fontWeight: 200, fontSize: 24, marginTop: 20, marginBottom: 20 }}>Try our app for Free for 14 Days</h3>
                                <p style={{ fontWeight: 300 }}>Dive into a no-obligation 14-day trial. Experience our features and see the difference firsthand.</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', margin: 20 }}>
                            <p className={styles.number} style={{ color: '#ffb3d5', textShadow: '1px 1px 1px black' }}>3.</p>
                            <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: 20 }}>
                                <h3 style={{ fontWeight: 200, fontSize: 24, marginTop: 20, marginBottom: 20 }}>Onboarding & Link Your Socials</h3>
                                <p style={{ fontWeight: 300 }}>With our simple onboarding, link your social media accounts in a few clicks and you're set.</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
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
            <Background />
            <Main />
            <Footer />
        </>
    )
}