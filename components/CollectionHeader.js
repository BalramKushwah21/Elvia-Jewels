import styles from "./CollectionHeader.module.css";

export default function CollectionHeader({ title }) {
  return (
    <div className={styles.hero}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          {title.charAt(0).toUpperCase() + title.slice(1)}
        </h1>

        <p className={styles.subtitle}>Where elegance meets sparkle</p>

        <div className={styles.divider}></div>
      </div>
    </div>
  );
}
