import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "@/app/styles/footer.module.css";
import {IoMenuOutline, IoLogoInstagram, IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin, IoLogoTiktok, IoLogoPinterest} from 'react-icons/io5';
import localFont from 'next/font/local'

const Belgiano = localFont({ src: '../../../public/fonts/Belgiano.ttf'})

export default function Footer() {
    const router = useRouter();
    const [email, setEmail] = useState('');

    const handleSubmit = (e :any) => {
        e.preventDefault();
        // handle the newsletter submission logic here
        alert(`Subscribed with email: ${email}`);
        setEmail('');  // clear the input
    };
    return(
        <>
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.section}>
                    <h3>LOGO</h3>
                    <p>Description / Slogan</p>
                </div>
                <section className={styles.section}>
                    <h3 className={Belgiano.className}>Company</h3>
                    <ul style={{marginTop: 30, marginBottom: 10}}>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Security</a></li>
                    </ul>
                </section>
                <section className={styles.section}>
                    <h3 className={Belgiano.className}>Platforms</h3>
                    <ul style={{marginTop: 30, marginBottom: 10}}>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">TikTok</a></li>
                        <li><a href="#">Linkedin</a></li>
                        <li><a href="#">Pinterest</a></li>
                        <li><a href="#">Twitter</a></li>
                    </ul>
                </section>
                <section className={styles.section}>
                    <h3 className={Belgiano.className}>Product</h3>
                    <ul style={{marginTop: 30, marginBottom: 10}}>
                        <li><a href="#">Multi canal dashboard</a></li>
                        <li><a href="#">Publication plannification</a></li>
                        <li><a href="#">Analytics & Data</a></li>
                        <li><a href="#">Pricing</a></li>
                    </ul>
                </section>
                <section className={styles.section}>
                    <h3 className={Belgiano.className}>Resources</h3>
                    <ul style={{marginTop: 30, marginBottom: 10}}>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </section>
            </div>
            <div className={styles.container} style={{}}>
                <section className={styles.section}>
                <div className={styles.socialIcons}>
                    <h2 className={Belgiano.className}>Follow us</h2>
                    <div style={{paddingTop: 10}}>
                        <a href="#"><IoLogoFacebook/></a>
                        <a href="#"><IoLogoInstagram/></a>
                        <a href="#"><IoLogoLinkedin/></a>
                        <a href="#"><IoLogoTiktok/></a>
                        <a href="#"><IoLogoTwitter /></a>
                        <a href="#"><IoLogoPinterest/></a>
                    </div>
                </div>
                </section>
                <section className={styles.section}>
                    <h2 className={Belgiano.className}>Join our Newsletter</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            className={styles.inputbox}
                            type="email"
                            name="email"
                            placeholder="Your email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <button className={styles.button} type="submit">Subscribe</button>
                    </form>
                </section>
            </div>
            <hr className={styles.hr}/>
            <div className={styles.container}>
                <section className={styles.section}>
                    <span>&copy; 2023 Your Company - All Rights Reserved</span>
                </section>
                <section className={styles.section}>

                </section>
                <section className={styles.section}>
                    <a href='#'>Sitemap</a>
                    <a href='#'>Terms of Service</a>
                    <a href='#'>Privacy Policy</a>
                </section>
            </div>
        </footer>
        </>
    )
}