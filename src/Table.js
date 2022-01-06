import { Table } from 'antd'

export default function TableDetail() {
    const columns  = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
          },
          {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
          },
    ]
    return <Table pagination={false} columns={columns} dataSource={[]} />
}