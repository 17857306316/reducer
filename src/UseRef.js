// import { Input } from 'antd'
// import { useState, useRef } from 'react';

// export default function UseRef() {
//     const inputRef = useRef(null)
//     const divRef = useRef(null)


//     return (
//         <>
//             <Input style={{ width: 100 }} value={123} ref={inputRef}></Input>

//             <div ref={divRef}>要被修改的div</div>
//             <button onClick={() => {
//                 inputRef.current.focus()
//                 // inputRef.value = 12323
//                 divRef.current.innerHTML = '修改后的值'
//                 console.log(inputRef);
//             }}> 获取焦点</button>
//         </>
//     )

// }

import React, {  useRef, useState } from 'react'
function UseRef() {
    const inputEl = useRef(null)
    const [num,setNum]=useState({value:''})
    return (
        <div className='container'>
            <h3>作用：获取dom元素和存取变量</h3>
            <h3>先获取input的dom元素，然后把输入的值打印出来</h3>
            <input type="password" id="inputPassword2" ref={inputEl} className="form-control" placeholder="Password"></input>
            <button className="btn btn-primary mb-2" onClick={() => {
                console.log(inputEl.current.value);
                setNum({value:inputEl.current.value})
            }
            }>点击</button>
            <h1>输入的值：{num.value}</h1>
        </div>
    )
}
export default UseRef
