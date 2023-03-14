import styles from './Button.module.css'
import React from "react";
import {NextPage} from "next";
import Link from "next/link";

type Props = {
    clickHandler: () => void;
    link: string;
    text: string
}
 const Button: NextPage<Props> = ({clickHandler, link, text}) =>{
    return (

            <Link href={link}>
                <button onClick={clickHandler} className={styles["button"]}>
                    {`Upload ${text} from server`}
                </button>
            </Link>
    )
}

export default Button