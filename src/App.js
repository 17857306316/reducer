import { useRef } from 'react'
import ChildComp from './ChildComp'
import UseRef from './UseRef'
import UseLayoutEffect from './UseLayoutEffect'
export default function App() {
    const childRef = useRef();
    const updateChildState = () => {
        // changeVal就是子组件暴露给父组件的方法
        childRef.current.changeVal(99);
    }
    return (
        <>
            <h1>1、useImperativeHandle</h1>
            {/* 此处注意需要将childRef通过props属性从父组件中传给自己 cRef={childRef} */}
            <ChildComp cRef={childRef} />
            <button onClick={updateChildState}>触发子组件方法</button>

            <h1>2、useRef</h1>
            <UseRef></UseRef>

            <h1>3、UseLayoutEffect</h1>

            <UseLayoutEffect></UseLayoutEffect>


        </>
    )
}