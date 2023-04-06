import {MainPage} from "@/Components/MainPage/MainPage";
import {useEffect, useState} from "react";
import {BASE_URL, User} from "@/pages/api/api";
import styles from "@/pages/users/Users.module.css";

export default function Csr() {
    const [data, setData] = useState<User[]|null>(null);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`${BASE_URL}/users`)
            .then((res) => res.json())
            .then((data) => {
                setData(data.slice(0,3))
                setLoading(false)
            })
    }, [])

    if (isLoading) return  <MainPage><p>Loading...</p></MainPage>
    if (!data) return <MainPage><p>No profile data</p></MainPage>

    return (
        <MainPage>
            <h1>Client Side Rendering</h1>

                <table>
                    <tr>
                        <th className={styles["table__th"]}>name</th>
                        <th className={styles["table__th"]}>phone</th>
                    </tr>
                    {data.map(user => (
                        <tr key={user.id}>
                            <th className={styles["table__th"]}>{user.name}</th>
                            <th className={styles["table__th"]}>{user.phone}</th>
                        </tr>
                    ))
                    }
                </table>

        </MainPage>
    )
}