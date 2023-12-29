import Authentication from "@/app/components/authentication";
import Login from "@/app/components/login";
import Navbar from "@/app/components/navbar";
import Register from "@/app/components/register";
import React from "react";
import Picture2 from '../../public/assets/picture2.jpg'
import Image from "next/image";

export default function login() {
    return(
        <>
        <div style={{maxWidth: '1600px', margin: ' auto'}}>
        <div style={{height: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'row'}}>
            <div style={{ height: '100vh', flex: 1}}>
            <Image src={Picture2} alt="illustration social network hub" style={{width: '100%', height: 'auto'}}/>
            </div>
            <div style={{height: '100vh', flex: 1, margin: 'auto'}}>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                <Login />
                </div>
            </div>
        
        </div>
        </div>
        </>
    )
    
}