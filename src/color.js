import { createContext, useReducer, useEffect } from 'react'
import axios from 'axios'

const ColorContext = createContext()


const reducer = function (state, action) {

    switch (action.type) {
        case 'add':
            return state + 1
        case 'sub':
            return state - 1
        case 'request':
            return action.state
        default:
            return state
    }
}

function Color(props) {
    const [color, dispatch] = useReducer(reducer, '')
    useEffect(() => {
        axios.get('https://www.fastmock.site/mock/f786e661350436da533d11037d50598a/redux/fas').then(res => {
            dispatch({ type: 'request', state: res.data.data })
        })

    }, [])
    return <ColorContext.Provider value={{ color, dispatch }}>
        {props.children}
    </ColorContext.Provider>
}

export {
    ColorContext,
    Color,
}
