import { Button, Descriptions } from 'antd'
import { useContext,useRef } from 'react'
import { DetailContext } from './Context'

export default function Submit() {
    const { value, form, dispatch } = useContext(DetailContext)
    const inputEl = useRef(null);
    console.log(value);
    function submit() {
        form.validateFields().then(values => {
            console.log(values);
        })
    }
    return <>
        <Button ref={inputEl} onClick={() => dispatch({ type: 'add' })}>add</Button>
        <Button onClick={() => dispatch({ type: 'sub', })}>sub</Button>
        <Button onClick={() => submit()}>保存</Button>
    </>
}