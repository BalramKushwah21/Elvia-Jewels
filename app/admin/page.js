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
            this for products 
            </div>
            <div className={styles.revenue}>
            this is for revenue
            </div>
            </div>

            <div className={styles.OtherPages}>
            <Link href ="admin/products/add">Add Products</Link>
            <Link href ="admin/products/edit">Edit Products</Link>
            <Link href ="admin/products">All Products</Link>
            </div>
        </div>
    )
}