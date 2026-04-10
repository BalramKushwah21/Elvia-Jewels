import styles from "./admin.module.css";
import Link from "next/link";


export default function AdminPage(){


    return(
        <div className={styles.main_container}>
            <h1 className={styles.heading}>
            Wellcome To Admin Panel
            </h1>
          
            <div className={styles.container}>

            <div className={styles.users}>
            this is for users
            </div>

            <div className={styles.products}>
            this for producrts 
            </div>
            <div className={styles.revenue}>
            this is for revenue
            </div>
            </div>

            <div className={styles.OtherPages}>
            <Link href ="admin/add-products">Add Products</Link>
            <Link href ="admin/edit-products">Edit Products</Link>
            </div>
        </div>
    )
}