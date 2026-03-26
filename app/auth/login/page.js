"use client";
import Link from "next/link";

import "./login.css"

export default function Login(){
return(

<div className="wrapper">

<div className="card">

{/* LEFT DESIGN */}
<div className="left">

<div className="triangle1"></div>
<div className="triangle2"></div>
<div className="triangle3"></div>

<div className="leftText">
<h2>LOGIN</h2>
<p>SIGN IN</p>
</div>

</div>

{/* RIGHT */}
<div className="right">

<div className="avatar">👤</div>

<h3>LOGIN</h3>

<div className="inputGroup">
<span>👤</span>
<input placeholder="Email"/>
</div>

<div className="inputGroup">
<span>🔒</span>
<input placeholder="Password"/>
</div>

<div className="forgot">Forgot Password?</div>

<button className="btn">LOGIN</button>

<div className="social text-black font-bold">
Or Login With
<span>Google</span>
<span>Facebook</span>
<div className="notMenber">
    <span>Not a membet</span> <Link href="./register">Register</Link>
    
</div>

</div>

</div>

</div>

</div>

)
}