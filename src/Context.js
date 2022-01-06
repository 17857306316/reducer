import { createContext, useReducer, useEffect } from 'react'
import { Form } from 'antd'
const DetailContext = createContext({})

const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return state + 1
        case 'sub':
            return state-1
        default:
            return state
    }
}

function Context(props) {
    const [form] = Form.useForm();
    const [value, dispatch] = useReducer(reducer, 1)
    return <DetailContext.Provider value={{ value, dispatch, form }}>
        <Form form={form}
            initialValues={{
                1: 1,
                2: 2,
                3: 3,
                4: 4
            }}
            form={form}
            layout={'inline'}>
            {props.children}
        </Form>
    </DetailContext.Provider>
}

export {
    Context,
    DetailContext
}