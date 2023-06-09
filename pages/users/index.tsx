import {NextPage} from "next";
import styles from "./Users.module.css";
import {User, BASE_URL} from "@/pages/api/api";
import {MainPage} from "@/Components/MainPage/MainPage";
import Link from "next/link";
import classNames from "classnames";
import {useState} from "react";

type Props = {
    users: User[]
};

 const Users: NextPage<Props> = ({users}) => {
    return (
        <MainPage>
            {users ? <div className={styles["table"]}>
                <div className={styles["table__head"]}>

                    <div className={classNames(styles["table__th"], styles["table__th-id"])}>id</div>
                    <div className={styles["table__th"]}>name</div>
                    <div className={styles["table__th"]}>username</div>

                </div>
                <div>
                    {users.map(user => (
                        <div key={user.id} >
                            <Link href={`/user/[id]`} as={`/user/${user.id}`} className={styles["table__row"]}>
                                <span className={classNames(styles["table__th"], styles["table__th-id"])}>{user.id}</span>
                                <span className={styles["table__th"]}>{user.name}</span>
                                <span className={styles["table__th"]}>{user.username}</span>
                            </Link>

                        </div>
                    ))}
                </div>
            </div> : <p>Loading...</p>}
        </MainPage>
    );
};

export default Users;

Users.getInitialProps = async () => {
    const response =  await fetch(`${BASE_URL}/users`);
    const users = await response.json();
    return {
        users: users.slice(0,10)
    }
}
