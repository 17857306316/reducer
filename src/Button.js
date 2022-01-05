import React,{useContext} from "react";
import {ColorContext} from './color'

export default function Button() {
    const {dispatch}  = useContext(ColorContext)


    //change something
    return (
        <React.Fragment>
            <button onClick={()=>{dispatch({type:'add',color:'red'})}}>add</button>
            <button onClick={()=>{dispatch({type:'sub',color:'yellow'})}}>sub</button>
        </React.Fragment>
    );
}