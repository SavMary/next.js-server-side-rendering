import React from "react";
import styles from "./Header.module.css";


export const Header = () => (
    <header className={styles.header}>
        <h2 className={styles["header__title"]}>
            Try all of Server-side rendering in Next.js!
        </h2>
    </header>
);
