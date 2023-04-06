import {NextPage} from "next";
import styles from "../users/Users.module.css";
import {Post, BASE_URL} from "@/pages/api/api";
import {MainPage} from "@/Components/MainPage/MainPage";
import classNames from "classnames";


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
            {posts ? <table className={styles["table"]}>
                <tr>
                    <th className={classNames(styles["table__th"], styles["table__th-id"])}>id</th>
                    <th className={styles["table__th"]}>title</th>
                    <th className={styles["table__th"]}>post</th>
                </tr>
                {posts.map(post => (
                    <tr key={post.id} >
                        <th className={classNames(styles["table__th"], styles["table__th-id"])}>{post.id}</th>
                        <th className={styles["table__th"]}>{post.title}</th>
                        <th className={styles["table__th"]}>{post.body}</th>
                    </tr>
                ))}
            </table> : <p>Loading...</p>}
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
