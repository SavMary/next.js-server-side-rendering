import {MainPage} from "@/Components/MainPage/MainPage";
import React, {useState} from "react";
import Button from "@/Components/Button/Button";

export default function Isr() {
    const [isClick, setClick]= useState(false);
    const clickHandler = () => {
        setClick(true)
    }
    return (
        <MainPage>
            <h1>Incremental Static Regenerationg</h1>
            {!isClick && <Button clickHandler={clickHandler} link={"/comments"} text={"comments"}/>}
        </MainPage>
    )
}