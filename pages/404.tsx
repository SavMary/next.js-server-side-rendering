import React from "react";
import Link from "next/link";
import styles from '@/styles/Home.module.css'
import {MainPage} from "@/Components/MainPage/MainPage";



export default function ErrorPage() {
return (
    <MainPage>
        <p className={styles["error__wrapper"]}>
            Back to <Link href={"/"} className={styles["error"]}>Main Page</Link>
        </p>
    </MainPage>
)
};
