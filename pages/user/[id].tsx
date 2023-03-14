import React from "react";
import {MainPage} from "@/Components/MainPage/MainPage";
import styles from "./User.module.css";
import {BASE_URL, User} from "@/pages/api/api";
import {NextPageContext} from 'next';
import Link from "next/link";
import {Inter} from "next/font/google";
import classNames from "classnames";
const inter = Inter({ subsets: ['latin'] })

// import {useRouter} from 'next/router';


type Props = {
    user: User
};

export default function UserPage({user}: Props) {
    // const router = useRouter();
    // const [userFromServer, setUserFromServer] = useState<User>();

    // useEffect(() => {
    //     async function getUserById() {
    //     const response = await fetch(`${BASE_URL}.${router.query.id}`);
    //     const data = await response.json();
    //
    //     setUserFromServer(data);
    //     }
    //
    //     getUserById();
    // },[])

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

// interface UserNextPageContext extends NextPageContext {
//     query: {
//         id: string
//     }
// }

UserPage.getInitialProps = async ( ctx: NextPageContext ) => {
    // if (!req) {
    //     return {user: null}
    // }

    const response = await fetch(`${BASE_URL}/users/${ctx.query.id}`)
    const user: User = await response.json()

    return {
        user
    }

}