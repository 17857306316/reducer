import { useRef, Component, useEffect, useState } from 'react'
import ChildComp from './ChildComp'
import Element from './Element'
import UseLayoutEffect from './UseLayoutEffect'
import UseRef from './UseRef'
import UpLoad from './Upload'
import 'antd/dist/antd.css';
import MyButton from './MyBotton'
// class ErrorBoundary extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { hasError: false };
//     }

//     componentDidCatch(error, info) {
//         this.setState({ hasError: true });

//     }

//     render() {
//         if (this.state.hasError) {
//             return <h1>Something went wrong.</h1>;
//         }
//         return this.props.children;
//     }
// }

export default function App() {
    let [modalVisible, setModalVisible] = useState(false)
    // const childRef = useRef();
    // var num = 0
    // const updateChildState = () => {
    //     num++
    //     childRef.current.changeVal(num);
    // }

    const toDo = () => {
        console.log(123);
    }

    const onOk = () => {
        console.log(1);
        setModalVisible(false)
    }
    const onCancel = () => {
        console.log(2);
        setModalVisible(false)
    }
    const open = ()=>{
        setModalVisible(true)
    }
    return (
        <>
            <MyButton
                onOk={onOk}
                onCancel={onCancel}
                visible={modalVisible}
                open={open}
                >
                <div>123</div>
            </MyButton>

            {/* <h1>1、useImperativeHandle</h1>
            <ErrorBoundary>
                <ChildComp cRef={childRef} />
                <button
                    onClick={updateChildState}
                >触发子组件方法</button>
            </ErrorBoundary>
            <h1>2、useRef</h1>
            <UseRef></UseRef>
            <h1>3、UseLayoutEffect</h1>
            <UseLayoutEffect></UseLayoutEffect>
            <div>change something</div>
            <h1>4、Element</h1>
            <ErrorBoundary>
                <Element></Element>
            </ErrorBoundary>
            <h1>4、Upload</h1>
            <UpLoad></UpLoad> */}
        </>
    )
}
