"use client";
import styles from "./login.module.css";

export default function Login(){
return(

<div className={styles.wrapper}>

<div className={styles.card}>

{/* LEFT DESIGN */}
<div className={styles.left}>

<div className={styles.triangle1}></div>
<div className={styles.triangle2}></div>
<div className={styles.triangle3}></div>

<div className={styles.leftText}>
<h2>LOGIN</h2>
<p>SIGN IN</p>
</div>

</div>

{/* RIGHT */}
<div className={styles.right}>

<div className={styles.avatar}>👤</div>

<h3>LOGIN</h3>

<div className={styles.inputGroup}>
<span>👤</span>
<input placeholder="Email"/>
</div>

<div className={styles.inputGroup}>
<span>🔒</span>
<input placeholder="Password"/>
</div>

<div className={styles.forgot}>Forgot Password?</div>

<button className={styles.btn}>LOGIN</button>

<div className={styles.social}>
Or Login With
<span>Google</span>
<span>Facebook</span>
</div>

</div>

</div>

</div>

)
}