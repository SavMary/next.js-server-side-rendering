import {NextPage} from "next";
import styles from "./users/Users.module.css";
import {BASE_URL, Comment} from "@/pages/api/api";
import {MainPage} from "@/Components/MainPage/MainPage";
import Link from "next/link";
import classNames from "classnames";

type Props = {
    comments: Comment[]
};

const Comments: NextPage<Props> = ({comments}) => {

    return (
        <MainPage>
            <table className={styles["table"]}>
                    <tr>
                    <th className={classNames(styles["table__th"], styles["table__th-id"])}>id</th>
                    <div className={styles["table__th"]}>name</div>
                    <th className={styles["table__th"]}>comment</th>
                    </tr>

                {comments.map(comment => (
                    <tr key={comment.id} >
                            <td className={classNames(styles["table__th"], styles["table__th-id"])}>{comment.id}</td>
                            <td className={styles["table__th"]}>{comment.name}</td>
                            <td className={styles["table__th"]}>{comment.body}</td>
                    </tr>
                ))}
            </table>
        </MainPage>
    );
};

export default Comments;

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch(`${BASE_URL}/comments`)
    const comments = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            comments: comments.slice(0,10)
        },

        revalidate: 1,
    };
}
