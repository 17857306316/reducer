import { Form, Input, Select } from 'antd';
export default function Form1() {
    return <>
        <Form.Item
            label="Username"
            name="1"
            rules={[{ required: true, message: 'Please input your username!' }]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            label="Password"
            name="2"
            rules={[{ required: true, message: 'Please input your password!' }]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            label="Username"
            name="3"
            rules={[{ required: true, message: 'Please input your username!' }]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            label="Password"
            name="4"
            rules={[{ required: true, message: 'Please input your password!' }]}
        >
            <Input />
        </Form.Item>
    </>
}