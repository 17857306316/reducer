import { Form, Input, Select } from "antd"
export default function Form2() {
    return (
        <>
            <Form.Item label="备注" name="5" rules={[{ required: true, message: "Please input your password!" }]}>
                <Input.TextArea />
            </Form.Item>
        </>
    )
}
