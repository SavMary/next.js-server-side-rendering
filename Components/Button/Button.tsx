import styles from './Button.module.css'
import React from "react";
import {NextPage} from "next";
import Link from "next/link";

type Props = {
    clickHandler: () => void;
}
 const Button: NextPage<Props> = ({clickHandler}) =>{
    return (

            <Link href={"./users"}>
                <button onClick={clickHandler} className={styles["button"]}>
                Upload users from server
                </button>
            </Link>
    )
}

export default Button