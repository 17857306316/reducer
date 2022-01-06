import { createContext, useReducer, useEffect } from "react"
import { Form } from "antd"
import axios from "./axios/index"
import { useState } from "react/cjs/react.development"

const DetailContext = createContext({})

const reducer = (state, action) => {
    switch (action.type) {
        case "add":
            return state + 1
        case "sub":
            return state - 1
        default:
            return state
    }
}

function Context(props) {
    const [form] = Form.useForm()
    const [value, dispatch] = useReducer(reducer, 1)
    const [detail, setDetail] = useState([])

    useEffect(() => {
        getDetail()
    }, [])

    function getDetail() {
        axios.post("https://www.fastmock.site/mock/7336fb0e5f70a8feb6f8ec1e786a3c63/transport/demo111").then(res => {
            setDetail(res)
        })
    }
    return (
        <DetailContext.Provider value={{ value, dispatch, form, detail }}>
            <Form form={form} initialValues={{ 1: 1, 2: 2, 3: 3, 4: 4 }} form={form} layout={"inline"}>
                {props.children}
            </Form>
        </DetailContext.Provider>
    )
}

export { Context, DetailContext }
