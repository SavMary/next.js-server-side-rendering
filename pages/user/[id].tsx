import React from "react";
import {MainPage} from "@/Components/MainPage/MainPage";
import styles from "./User.module.css";
import {BASE_URL, User} from "@/pages/api/api";
import {NextPageContext} from 'next';
import Link from "next/link";
import {Inter} from "next/font/google";
import classNames from "classnames";
const inter = Inter({ subsets: ['latin'] })


type Props = {
    user: User
};

export default function UserPage({user}: Props) {

    return (
        <MainPage>
            <div className={styles.userCard} >
                <h3 className={classNames(styles["userCard__name"], inter.className)}>{user.name}<span>:</span></h3>
                <div className={classNames(styles["userCard__data"], inter.className)}>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                </div>

                <Link href={'/users'} className={classNames(styles["userCard__back"], inter.className)}>Back to all users</Link>
            </div>
        </MainPage>
    )
}

UserPage.getInitialProps = async ( ctx: NextPageContext ) => {

    const response = await fetch(`${BASE_URL}/users/${ctx.query.id}`)
    const user: User = await response.json()

    return {
        user
    }

}