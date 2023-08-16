import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/userSlice";
import { useRouter } from "next/router";
import Register from "@/app/components/register";
import Login from "@/app/components/login";

export default function Authentication() {
    const router = useRouter();
    const [isLogin, setIsLogin] = React.useState(true);
    return (
    <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div style={{width: 400, padding: 20, height: 500, borderColor: 'black', borderStyle: 'solid', borderWidth: '2px'}}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button onClick={() => setIsLogin(true)}>Login</button>
                <button onClick={() => setIsLogin(false)}>Register</button>
            </div>
            {!isLogin && <Register />}
            {isLogin && <Login />}
        </div>
    </div>
    );
}
