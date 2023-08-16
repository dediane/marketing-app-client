import {Provider} from 'react-redux'
import styles from '../app/styles/landing.module.css'
import React, {useContext, useEffect, useState} from "react";
import Image from 'next/image';
import Link from 'next/link';
import {IoMenuOutline} from 'react-icons/io5';
import useWindowSize from '@/app/hooks/windowSize';

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuOpen2, setMenuOpen2] = useState(false);

    const handleShowNav = () => {
        setShowNav(!showNav);
    }
    const isMobile = useWindowSize().width < 900;

    const handleMenu = () => {
        setMenuOpen(!menuOpen);
        if (menuOpen2) 
            setMenuOpen2(false);
    }
    const handleMenu2 = () => {
        setMenuOpen2(!menuOpen2);
        if (menuOpen)
            setMenuOpen(false);
        
    }

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
                        <li><a className={styles.navLink} href="#" onClick={handleMenu}>Solutions</a></li>
                        <li><a className={styles.navLink} href="#" onClick={handleMenu2}>Resources</a></li>
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
                {menuOpen && (<div className={styles.megaMenu}>
                    <div className={styles.megaMenuSection}>
                        <h3>Social Media made easy</h3>
                        <p>Manage your social media accounts in one place</p>
                        <div className={styles.megaMenubtn}>
                            <Link href='#'>Publish & Schedule</Link>
                            <p>Plan your posts and get constant communication</p>
                        </div>
                            <Link href='#'>Monitor activity</Link>
                            <Link href='#'>Get Analytics</Link>
                            <Link href='#'>Engage customers</Link>
                        </div>
                    <div>
                    <Link href='#'>How to get better Analytics</Link>
                    <Link href='#'>Engage your audience with good communication</Link>
                    </div>
                    <div>
                        
                    </div>
                </div>)}
                {menuOpen2 && (<div className={styles.megaMenu}>
                    <Link href='#'>How to get better Analytics</Link>
                    <Link href='#'>Engage your audience with good communication</Link>
                </div>)}
        </nav>
    </>
  );
};

export const Hero = () => {
    return (
        <div style={{height: 'calc(100vh - 66px)'}}>
        </div>
    );
}

export default function Landing() {
    return(
        <>
        <Navbar />
        <Hero />
        <Hero />
        </>
    )
}