import { Button, Modal } from 'antd'
import { useState, useEffect } from 'react'


export default function MyButton({ onOk, onCancel, children, visible, open }) {
    // const [visible, Setvisible] = useState(false)
    return (
        <>
            <Modal
                visible={visible}
                title={'title'}
                onOk={onOk}
                onCancel={onCancel}
            >
                <div>content</div>

            </Modal>
            <Button
                onClick={open}
                type='primary'
            >{children} </Button>
        </>
    )
}