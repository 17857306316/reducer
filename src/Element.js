import React, { useEffect } from 'react';
import { Input } from 'antd'
export default function Element() {

    useEffect(() => {
        let div = document.getElementsByClassName('div')[0]
        console.log(div);
    }, [])


    return (
        <>
            <div className='div'> im div</div>
            <input type='file'></input>
            <Input type='file'></Input>
        </>
    )
}