import {NextPage} from "next";
import styles from "./Users.module.css";
import {BASE_URL, User} from "@/pages/api/api";
import {MainPage} from "@/Components/MainPage/MainPage";

type Props = {
    users: User[]
};

 const Users: NextPage<Props> = ({ users }) => {
    return (
        <MainPage>
            <table className={styles["table"]}>
                <thead>
                <tr>
                    <th className={styles["table__row"]}>id</th>
                    <th className={styles["table__row"]}>name</th>
                    <th className={styles["table__row"]}>username</th>
                    <th className={styles["table__row"]}>email</th>
                    <th className={styles["table__row"]}>phone</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td className={styles["table__row"]}>{user.id}</td>
                        <td className={styles["table__row"]}>{user.name}</td>
                        <td className={styles["table__row"]}>{user.username}</td>
                        <td className={styles["table__row"]}>{user.email}</td>
                        <td className={styles["table__row"]}>{user.phone}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </MainPage>
    );
};

export default Users;

Users.getInitialProps = async () => {
    const response =  await fetch(`${BASE_URL}`);
    const users = await response.json();
    return {
        users: users.slice(0,10)
    }
}
