import {Provider} from 'react-redux'
import styles from '../app/styles/landing.module.css'
import button from '../app/styles/buttons.module.css'
import React, {useContext, useEffect, useRef, useState} from "react";
import Image from 'next/image';
import Link from 'next/link';
import {IoMenuOutline, IoLogoInstagram, IoLogoFacebook, IoLogoTiktok, IoLogoPinterest, IoLogoTwitter} from 'react-icons/io5';
import useWindowSize from '@/app/hooks/windowSize';
import { Router, useRouter } from 'next/router'
import landingIllustration from '../../public/assets/landing.png';
import localFont from 'next/font/local'
import Footer from '@/app/components/footer';
import Navbar from '@/app/components/navbar';

const Belgiano = localFont({ src: '../../public/fonts/Belgiano.ttf'})


export const Hero = () => {
    return (
        <div className={styles.container}>
            <div style={{height: 'calc(100vh - 66px)',display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <div style={{ flex: 1 , marginLeft: 120}}>
                    <h1 className={Belgiano.className} style={{fontSize: 80, paddingBottom: '40px'}}>Social Media <br></br>made easy</h1>
                    <p style={{fontSize: 18, marginBottom: '10px', fontWeight: 300}}>Manage your social media accounts in one place</p>
                    <p style={{fontSize: 18, marginBottom: '40px', fontWeight: 300}}>All in one APP - Get started now!</p>
                    <div>
                        <button className={button.button_big_accent}>Start your free trial!</button>
                        <button className={button.button_big}>Learn more</button>
                    </div>
                </div>
                <div style={{ flex: 1, marginRight: 120 }} className={styles.imageContainer}>
                    <Image src={landingIllustration} alt="illustration social network hub" style={{width: '100%', height: 'auto',}}/>
                </div>
            </div>
        </div>
    );
}

export const Background = () => {
    return (
        <>

        </>
    );
}

export const Logos = () => {
    const logos = [<IoLogoInstagram/>, <IoLogoFacebook/>, <IoLogoTiktok/>, <IoLogoTwitter/>, <IoLogoPinterest/>]
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
    const items = ['Start your free trial', 'Start your free trial', 'Start your free trial', 'Start your free trial', 'Start your free trial', 'Start your free trial', 'Start your free trial']
    return (
        <div className={styles.logoDiv2} onClick={() => router.push('/login')}>
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
    return (
        <div className={styles.container}>
        <div style={{marginLeft: 120, marginRight: 120, marginTop: 60}}>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <div style={{flex: 1}}>

                </div>
                <div style={{flex: 1}}>
                <h2 className={Belgiano.className} style={{fontSize: 46, marginBottom: '40px'}}>Centralize your <br/>social media management</h2>
                <div style={{marginBottom: '60px'}}>
                <p style={{fontSize: 18, marginBottom: '10px', fontWeight: 300}} >All your accounts. One view. No hassle.</p>
                <p style={{fontSize: 18, marginBottom: '10px', fontWeight: 300}}> We brings all your social media feeds into one convenient dashboard.</p>
                </div>
                <div>
                    <button className={button.button_accent_blue}>Discover our dashboard!</button>
                    <button className={button.button}>Learn more</button>
                </div>
                </div>

                </div>
            </div>
        </div>
    )
}

export const PlanSchedule = () => {
    return (
        <div className={styles.container}>
        <div style={{marginLeft: 120, marginRight: 120, marginTop: 60, marginBottom: 60}}>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <div style={{flex: 1}}>
                <h2 className={Belgiano.className} style={{fontSize: 46, marginBottom: '40px'}}>Plan and Schedule. <br/>Never forget.</h2>
                <div style={{marginBottom: '60px'}}>
                <p style={{fontSize: 18, marginBottom: '10px', fontWeight: 300}} >All your accounts. One view. No hassle.</p>
                <p style={{fontSize: 18, marginBottom: '10px', fontWeight: 300}}> We brings all your social media feeds into one convenient dashboard.</p>
                </div>
                <div>
                    <button className={button.button_accent}>Start planning your first Post!</button>
                    <button className={button.button}>Learn more</button>
                </div>
                <div style={{flex: 1}}>

                </div>
                </div>

            </div>
        </div>
        </div>
    )
}

export const Analytics = () => {
    return (
        <div className={styles.container}>
            <div style={{marginLeft: 120, marginRight: 120, marginTop: 80, marginBottom: 80}}>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <div style={{flex: 1}}>

                    </div>
                    <div style={{flex: 1}}>
                    <h2 className={Belgiano.className} style={{fontSize: 46, marginBottom: '40px'}}>In-depth Analytics</h2>
                    <div style={{marginBottom: '60px'}}>
                    <p style={{fontSize: 18, marginBottom: '10px', fontWeight: 300}} >Understand your audience with comprehensive insights and metrics.</p>
                    <p style={{fontSize: 18, marginBottom: '10px', fontWeight: 300}} >Monitor the performances of your publication.</p>
                    </div>
                    <div>
                        <button className={button.button_accent_pink}>Get exclusive insight!</button>
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
        <div style={{marginLeft: 120, marginTop: 50, marginBottom: 50, marginRight: 120, maxWidth: '1200px'}}>
            <h2 className={Belgiano.className} style={{fontSize: 46, marginBottom: '40px'}}>We are designed for</h2>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{padding: 30, marginLeft: 10, marginRight: 10}}>
                    <h2 style={{fontWeight: 200, fontSize: 24, marginBottom: 40}}>Business Owners Seeking Online Growth</h2>
                    {/* <p style={{marginBottom: 20}}><b>✓ Optimize Social Media Presence:</b><br/> Elevate your brand's visibility across all leading platforms with our integrated tool.<br/></p>
                    <p style={{marginBottom: 20}}><b>✓ Data-Driven Growth:</b><br/> Harness actionable insights to understand your audience, boosting organic business growth online.<br/></p>
                    <p style={{marginBottom: 20}}><b>✓ Automated Content Scheduling:</b><br/> Plan weeks ahead, allowing more time for core business strategies.</p> */}
                    <div style={{alignItems: 'center', justifyContent: 'center', display: 'flex', margin: 20}}>
                    <button className={button.button_accent_blue}>Explore now</button>
                    </div>
                </div>
                <div style={{padding: 30, marginLeft: 10, marginRight: 10}}>
                    <h2 style={{fontWeight: 200, fontSize: 24, marginBottom: 40}}> Freelancers Enhancing Digital Profiles</h2>
                    {/* <p style={{marginBottom: 10}}><b>✓ Unified Social Media Dashboard:</b><br/></p>
                    <p style={{marginBottom: 20}}>Effortlessly manage diverse accounts, catering to varied client needs.<br/></p>
                    <p style={{marginBottom: 20}}><b>✓ Affordable Social Media Tools:</b><br/> Premium features tailored to the freelancer budget.<br/></p>
                    <p style={{marginBottom: 20}}><b>✓ Client Collaboration Platform:</b><br/> Showcase and refine work with clients using real-time feedback.</p> */}
                    <div style={{alignItems: 'center', justifyContent: 'center', display: 'flex', margin: 20}}>
                    <button className={button.button_accent_blue}>Explore now</button>
                    </div>
                </div>
                <div style={{padding: 30, marginLeft: 10, marginRight: 10}}>
                    <h2 style={{fontWeight: 200, fontSize: 24, marginBottom: 40}}>Digital Agencies & Social Media Managers</h2>
                    {/* <p style={{marginBottom: 20}}><b>✓ Team Collaboration Tools:</b><br/> Role-specific assignments, permissions management, and streamlined team efforts.<br/></p>
                    <p style={{marginBottom: 20}}><b>✓ Comprehensive Social Media Reporting:</b><br/> Deliver clear ROI with detailed analytics and adaptable reports.<br/></p>
                    <p style={{marginBottom: 20}}><b>✓ Efficient Multi-Account Handling:</b><br/> Seamlessly manage bulk campaigns and posts, supporting agency-level scalability.</p> */}
                    <div style={{alignItems: 'center', justifyContent: 'center', display: 'flex', margin: 20}}>
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
        <div style={{marginLeft: 120, marginTop: 50, marginBottom: 50, marginRight: 120}}>
        <h2 className={Belgiano.className} style={{fontSize: 46, marginBottom: '40px'}}>How It Work</h2>
            <div style={{ display:'flex', flexDirection: 'row'}}>

                <div style={{display: 'flex', flexDirection: 'row', margin: 20}}>
                    <p className={styles.number} style={{color: '#C4F7A1', textShadow: '1px 1px 1px black'}}>1.</p>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                    <h3 style={{fontWeight: 200, fontSize: 24, marginTop: 20, marginBottom: 20}}>Compare & Choose Your Plan</h3>
                    <p style={{fontWeight: 300}}>Explore our tailored plans. Whether you're a pro or a beginner, we've got the right package for you.</p>
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', margin: 20}}>
                    <p className={styles.number} style={{color: '#b5eaff', textShadow: '1px 1px 1px black'}}>2.</p>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                     <h3 style={{fontWeight: 200, fontSize: 24, marginTop: 20, marginBottom: 20}}>Try our app for Free for 14 Days</h3>
                    <p style={{fontWeight: 300}}>Dive into a no-obligation 14-day trial. Experience our features and see the difference firsthand.</p>
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', margin: 20}}>
                    <p className={styles.number} style={{color: '#ffb3d5', textShadow: '1px 1px 1px black'}}>3.</p>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                     <h3 style={{fontWeight: 200, fontSize: 24, marginTop: 20, marginBottom: 20}}>Onboarding & Link Your Socials</h3>
                    <p style={{fontWeight: 300}}>With our simple onboarding, link your social media accounts in a few clicks and you're set.</p>
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
        <HowItWorks/>
        <StartFreeTrial />
        <WeareDesigned />
        </>
    )
}

export default function Landing() {
    return(
        <>
        <Navbar />
        <Background />
        <Main/>
        <Footer />
        </>
    )
}