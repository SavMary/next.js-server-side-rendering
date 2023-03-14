import {MainPage} from "@/Components/MainPage/MainPage";
import React, {useState} from "react";
import Button from "@/Components/Button/Button";

export default function Ssg() {
    const [isClick, setClick]= useState(false);
    const clickHandler = () => {
        setClick(true)
    }

    return (
        <MainPage>
            <h1>Static Site Generator</h1>
            {!isClick && <Button clickHandler={clickHandler} link={"/posts"} text={"posts"}/>}
        </MainPage>
    )
}