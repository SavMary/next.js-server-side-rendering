import {NextPage} from "next";
import styles from "../users/Users.module.css";
import {Post, BASE_URL} from "@/pages/api/api";
import {MainPage} from "@/Components/MainPage/MainPage";
import Link from "next/link";
import classNames from "classnames";
import {useEffect} from "react";

type Props = {
    posts: Post[]
};

const Posts: NextPage<Props> = ({posts}) => {

    if (!posts) {
        return <MainPage>
            <p>Loading ...</p>
        </MainPage>
    }

    return (
        <MainPage>
            <div className={styles["table"]}>
                <div className={styles["table__head"]}>
                    {/*<tr>*/}
                    <div className={classNames(styles["table__th"], styles["table__th-id"])}>id</div>
                    <div className={styles["table__th"]}>title</div>
                    <div className={styles["table__th"]}>post</div>
                    {/*<th className={styles["table__row"]}>email</th>*/}
                    {/*<th className={styles["table__row"]}>phone</th>*/}
                    {/*</tr>*/}
                </div>
                {/*<div>*/}
                {posts.map(post => (
                    <div key={post.id} >
                        <Link href={`/user/[id]`} as={`/user/${post.id}`} className={styles["table__row"]}>
                            <span className={classNames(styles["table__th"], styles["table__th-id"])}>{post.id}</span>
                            <span className={styles["table__th"]}>{post.title}</span>
                            <span className={styles["table__th"]}>{post.body}</span>
                        </Link>
                        {/*<td className={styles["table__row"]}>{user.email}</td>*/}
                        {/*<td className={styles["table__row"]}>{user.phone}</td>*/}
                    </div>
                ))}
                {/*</div>*/}
            </div>
        </MainPage>
    );
};

export default Posts;

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch(`${BASE_URL}/posts`)
    const posts = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts: posts.slice(0,10),
        },
    }
}
