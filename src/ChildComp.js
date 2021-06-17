import { useState, useImperativeHandle } from 'react';
// props子组件中需要接受ref
export default function ChildComp({ cRef }) {
    const [val, setVal] = useState();
    function rules(a) {
        setVal(a)
        console.log(a);
        return a
    }
    // 此处注意useImperativeHandle方法的的第一个参数是目标元素的ref引用
    useImperativeHandle(cRef, () => ({
        // changeVal 就是暴露给父组件的方法
        changeVal: (newVal) => {
            rules(newVal);
        }
    }));
    return (
        <>
          <div>{val}</div>
        </>)
}