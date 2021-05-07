import { useLayoutEffect, useEffect, useState } from 'react'

export default function UseLayoutEffect() {
    const [count, setCount] = useState(0);

    // useEffect(() => {
    useLayoutEffect(() => {
        if (count === 0) {
            const randomNum = 10 + Math.random() * 200
            setCount(10 + Math.random() * 200);
        }
    }, [count]);

    return (
        <div onClick={() => setCount(0)}>{count}</div>
    );


}