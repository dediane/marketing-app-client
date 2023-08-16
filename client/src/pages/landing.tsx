import {Provider} from 'react-redux'
import styles from '../app/styles/landing.module.css'
import React, {useContext, useEffect, useRef, useState} from "react";
import Image from 'next/image';
import Link from 'next/link';
import {IoMenuOutline, IoLogoInstagram, IoLogoFacebook, IoLogoTiktok} from 'react-icons/io5';
import useWindowSize from '@/app/hooks/windowSize';
import { useRouter } from 'next/router'
import landingIllustration from '../../public/assets/landing.png';
import localFont from 'next/font/local'

const Baldur = localFont({ src: '../../public/fonts/Baldur.ttf' })
const Titania = localFont({ src: '../../public/fonts/Titania-Regular.ttf' })


const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    const [openMenu, setOpenMenu] = useState(null);
    const menu1Ref = useRef(null);
    const menu2Ref = useRef(null);
    const router = useRouter();
    const handleShowNav = () => {
        setShowNav(!showNav);
    }
    const isMobile = useWindowSize().width < 900;

    const handleMouseEnter = (menuName :any) => {
        setOpenMenu(menuName);
    };
    
    const handleMouseLeave = (e :any, ref :any) => {
        if (!ref.current.contains(e.relatedTarget)) {
            setOpenMenu(null);
        }
    };

  return (
    <>
        <nav className={styles.navbar}>
            <div className={styles.navContent}>

                <div className={styles.logo}>
                    {/* <Image src="/logo.png" alt="logo" width={100} height={100} /> */}
                </div>
                {(showNav || !isMobile) && (
                <>
                <div className={styles.linksWrapper}>
                    <ul>
                    <li onMouseEnter={() => handleMouseEnter('menu1')} 
                    ref={menu1Ref}>
                    <a className={styles.navLink} href="#">Solutions</a>
                    </li>
                    <li 
                    onMouseEnter={() => handleMouseEnter('menu2')} 
                    ref={menu2Ref}>
                    <a className={styles.navLink} href="#">Resources</a>
                    </li>
                        <li><Link className={styles.navLink} href="/pricing">Pricing</Link></li>
                        <li><Link className={styles.navLink} href="/">Blog</Link></li>
                    </ul>
                </div> 
                <div className={styles.buttonsWrapper}>
                        <button className={styles.button}>Log in</button>
                        <button className={styles.button_accent}>Start your free trial!</button>
                </div>
                </>
                )}
                <IoMenuOutline onClick={handleShowNav} className={styles.hamburger} size='1.5em'/>
                </div>
                {openMenu === 'menu1' && (<div className={styles.megaMenu} onMouseLeave={(e) => handleMouseLeave(e, menu1Ref)}>
                    <div style={{padding:'40px'}}>
                        <h3 style={{borderLeft: 'solid 12px #ff78b5'}}>Social Media made easy</h3>
                        <p style={{marginBottom: '20px', marginTop: '10px', paddingLeft:'12px'}}>Manage your social media accounts in one place</p>
                        <hr style={{marginBottom: '20px'}}/>
                        <div className={styles.megaMenubtn} onClick={() => router.push('/publish-schedule')}>
                            <h4 className={styles.subtitle}>Publish & Schedule</h4>
                            <p>Plan your posts and get constant communication</p>
                        </div>
                        <div className={styles.megaMenubtn} onClick={() => router.push('/monitor-activities')}>
                            <h4 className={styles.subtitle}>Monitor activity</h4>
                            <p>Track activity on your Social Media</p>
                        </div>
                        <div className={styles.megaMenubtn} onClick={() => router.push('/get-analytics')}>
                            <h4 className={styles.subtitle}>Get Analytics</h4>
                            <p>Get insights on your audience</p>
                        </div>
                        <div className={styles.megaMenubtn} onClick={() => router.push('/engage-customers')}>
                            <h4 className={styles.subtitle}>Engage customers</h4>
                            <p>Communicate with your audience</p>
                         </div>
                    </div>
                    <div style={{padding:'40px'}}>
                        <h3 style={{borderLeft: 'solid 12px #49cbff'}}>Lite hub for your socials</h3>
                        <p style={{marginBottom: '20px', marginTop: '10px', paddingLeft:'12px'}}>Hassle-free social media management</p>
                        <hr style={{marginBottom: '20px'}}/>
                        <div className={styles.megaMenubtn2} onClick={() => router.push('/publish-schedule')}>
                            <h4 className={styles.subtitle}>One inbox for all your social medias</h4>
                            <p>Don't miss any message, get them all in one place</p>
                        </div>
                        <div className={styles.megaMenubtn2} onClick={() => router.push('/monitor-activities')}>
                            <h4 className={styles.subtitle}>AI powered assistant</h4>
                            <p>Use our AI assistant to generate Comments and Captions</p>
                        </div>
                        <div className={styles.megaMenubtn2} onClick={() => router.push('/get-analytics')}>
                            <h4 className={styles.subtitle}>PDF exportable</h4>
                            <p>Discuss about your marketing strategy with our PDF analytics overview</p>
                        </div>
                        <div className={styles.megaMenubtn2} onClick={() => router.push('/engage-customers')}>
                            <h4 className={styles.subtitle}>Convert your followers to customers</h4>
                            <p>Grow your community and convert them with a good communication</p>
                         </div>
                    </div>
                    <div>
                    <Link href='#'>How to get better Analytics</Link>
                    <Link href='#'>Engage your audience with good communication</Link>
                    </div>
                    <div>
                        
                    </div>
                </div>)}
                {openMenu === 'menu2' && (<div className={styles.megaMenu} onMouseLeave={(e) => handleMouseLeave(e, menu2Ref)}>
                    <Link href='#'>How to get better Analytics</Link>
                    <Link href='#'>Engage your audience with good communication</Link>
                </div>)}
        </nav>
    </>
  );
};

export const Hero = () => {
    return (
        <div style={{height: 'calc(100vh - 66px)',display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ flex: 1 }}>
                <h1 className={Baldur.className} style={{fontSize: 110, paddingBottom: '40px'}}>Social Media made easy</h1>
                <p style={{fontSize: 24, marginBottom: '40px'}}>Manage your social media accounts in one place — all in one app.
                Get Started now!</p>
                <div>
                    <button className={styles.button_big_accent}>Start your free trial!</button>
                    <button className={styles.button_big}>Learn more</button>
                </div>
            </div>
            <div style={{ flex: 1 }} className={styles.imageContainer}>
                <Image src={landingIllustration} alt="illustration social network hub" style={{width: 'auto', height: '100%',}}/>
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

export default function Landing() {
    return(
        <>
        <Navbar />
        <Background />
        <div style={{marginLeft: 120}}>
        <Hero />
        </div>
        </>
    )
}