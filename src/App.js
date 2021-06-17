import { useRef, Component } from 'react'
import ChildComp from './ChildComp'
import Element from './Element'
import UseLayoutEffect from './UseLayoutEffect'
import UseRef from './UseRef'
import UpLoad from './Upload'
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true });
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, info);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}

export default function App() {
    const childRef = useRef();
    var num = 0
    const updateChildState = () => {
        num++
        // changeVal就是子组件暴露给父组件的方法
        // childRef.current.changeVal('suprice mather fucker');
        childRef.current.changeVal(num);
    }



    return (
        <>

            <h1>1、useImperativeHandle</h1>
            {/* 此处注意需要将childRef通过props属性从父组件中传给自己 cRef={childRef} */}
            <ChildComp cRef={childRef} />
            <button onClick={updateChildState}>触发子组件方法</button>
            <h1>2、useRef</h1>
            <br></br>
            <UseRef></UseRef>

            <h1>3、UseLayoutEffect</h1>
            <br></br>


            <UseLayoutEffect></UseLayoutEffect>
            <div>change something</div>

            <h1>4、Element</h1>
            <br></br>

            <ErrorBoundary>
                <Element></Element>
            </ErrorBoundary>
            <br></br>

            <h1>4、Upload</h1>

            <UpLoad></UpLoad>
        </>
    )
}
