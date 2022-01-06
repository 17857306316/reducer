import { Table } from "antd"
import { useContext } from "react"
import { DetailContext } from "./Context"

export default function TableDetail() {
    const { detail } = useContext(DetailContext)
    console.log(DetailContext);

    console.log(detail);
    const columns = [
        {
            title: "姓名",
            dataIndex: "availableNum",
            key: "name"
        },
        {
            title: "年龄",
            dataIndex: "brandCode",
            key: "age"
        },
        {
            title: "住址",
            dataIndex: "goodsName",
            key: "address"
        }
    ]
    return <Table pagination={false} columns={columns} dataSource={detail.dataList} />
}
