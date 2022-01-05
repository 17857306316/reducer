import React, { useContext } from "react";
import { ColorContext } from "./color";
export default function ShowArea(props) {
    const color = useContext(ColorContext).color
    return <div >数字为{color}</div>
}