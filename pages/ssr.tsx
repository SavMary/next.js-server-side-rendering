import React from "react";
import {MainPage} from "@/Components/MainPage/MainPage";
import {useState} from "react";
import Button from "@/Components/Button/Button";

 const Ssr = () => {
    const [isClick, setClick]= useState(false);
    const clickHandler = () => {
        setClick(true)
    }

    return (
        <MainPage>
            <h1>Server Side Rendering</h1>
            {!isClick && <Button clickHandler={clickHandler}/>}
        </MainPage>
    )
}

export default Ssr
