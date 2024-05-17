import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import useWindowSize from "../hooks/windowSize";
import Link from "next/link";
import { IoMenuOutline } from "react-icons/io5";
import styles from "@/app/styles/navbar.module.css"
import button from '@/app/styles/buttons.module.css'
import localFont from 'next/font/local';
import Image from "next/image";

const Belgiano = localFont({ src: '../../../public/fonts/Belgiano.ttf'})

export default function Navbar() {
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
    
    // const handleMouseLeave = (e :any, ref :any) => {
    //     if (e.relatedTarget && e.relatedTarget instanceof Node && !ref.current.contains(e.relatedTarget)) {
    //         setOpenMenu(null);
    //     }
    // };

    const handleMouseLeave = (e: any, ref: any) => {
        if (ref.current) {
            const boundingBox = ref.current.getBoundingClientRect();
    
            const isOutside =
                e.clientX < boundingBox.left ||
                e.clientX > boundingBox.right ||
                e.clientY < boundingBox.top ||
                e.clientY > boundingBox.bottom;
    
            if (isOutside) {
                setOpenMenu(null);
            }
        }
    };

  return (
    <>
        <nav className={styles.navbar}>
            <div className={styles.navContent}>

                <div className={styles.logo}>
                    <a href="/">
                        <Image src="/assets/home.png" alt="logo" width={20} height={20} />
                    </a>
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
                        <button className={button.button} onClick={() => router.push('/login')}>Log in</button>
                        <button className={button.button_accent} onClick={() => router.push('/register')}>Start your free trial!</button>
                </div>
                </>
                )}
                <IoMenuOutline onClick={handleShowNav} className={styles.hamburger} size='1.5em'/>
                </div>
                {openMenu === 'menu1' && (<div className={styles.megaMenu} onMouseLeave={(e) => handleMouseLeave(e, menu1Ref)}>
                    <div className={styles.container} style={{display: "flex", flexDirection: "row"}}>
                        <div style={{padding:'40px'}}>
                            <h3 style={{borderLeft: 'solid 12px #ff78b5', fontSize: 24}} className={Belgiano.className}>Social Media made easy</h3>
                            <p style={{marginBottom: '20px', marginTop: '10px', paddingLeft:'12px'}}>Manage your social media accounts in one place</p>
                            <hr style={{marginBottom: '20px'}}/>
                            <div className={styles.megaMenubtn} onClick={() => router.push('/')}>
                                <h4 className={styles.subtitle}>Publish & Schedule</h4>
                                <p>Plan your posts and get constant communication</p>
                            </div>
                            <div className={styles.megaMenubtn} onClick={() => router.push('/')}>
                                <h4 className={styles.subtitle}>Monitor activity</h4>
                                <p>Track activity on your Social Media</p>
                            </div>
                            <div className={styles.megaMenubtn} onClick={() => router.push('/')}>
                                <h4 className={styles.subtitle}>Get Analytics</h4>
                                <p>Get insights on your audience</p>
                            </div>
                            <div className={styles.megaMenubtn} onClick={() => router.push('/')}>
                                <h4 className={styles.subtitle}>Engage customers</h4>
                                <p>Communicate with your audience</p>
                            </div>
                        </div>
                        <div style={{padding:'40px'}}>
                            <h3 style={{borderLeft: 'solid 12px #49cbff', fontSize: 24}} className={Belgiano.className}>Lite hub for your socials</h3>
                            <p style={{marginBottom: '20px', marginTop: '10px', paddingLeft:'12px'}}>Hassle-free social media management</p>
                            <hr style={{marginBottom: '20px'}}/>
                            <div className={styles.megaMenubtn2} onClick={() => router.push('/')}>
                                <h4 className={styles.subtitle}>One inbox for all your social medias</h4>
                                <p>Don't miss any message, get them all in one place</p>
                            </div>
                            <div className={styles.megaMenubtn2} onClick={() => router.push('/')}>
                                <h4 className={styles.subtitle}>AI powered assistant</h4>
                                <p>Use our AI assistant to generate Comments and Captions</p>
                            </div>
                            <div className={styles.megaMenubtn2} onClick={() => router.push('/')}>
                                <h4 className={styles.subtitle}>PDF exportable</h4>
                                <p>Discuss about your marketing strategy with our PDF analytics overview</p>
                            </div>
                            <div className={styles.megaMenubtn2} onClick={() => router.push('/')}>
                                <h4 className={styles.subtitle}>Convert your followers to customers</h4>
                                <p>Grow your community and convert them with a good communication</p>
                            </div>
                        </div>
                        {/* <div>
                        <Link href='#'>How to get better Analytics</Link>
                        <Link href='#'>Engage your audience with good communication</Link>
                        </div> */}
                        </div>
                    </div>)}
                {/* {openMenu === 'menu2' && (<div className={styles.megaMenu} onMouseLeave={(e) => handleMouseLeave(e, menu2Ref)}>
                    <Link href='#'>How to get better Analytics</Link>
                    <Link href='#'>Engage your audience with good communication</Link>
                </div>)} */}
        </nav>
    </>
  );
};