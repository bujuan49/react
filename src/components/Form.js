import React, { Component } from 'react'
import './form.css'
import {
    Table, Form, Button, Input, Select, DatePicker, Radio
} from 'antd'
import { types, idType, servieName, handleState } from '../utils/datas'
import { connect } from 'react-redux'
const { RangePicker } = DatePicker
const { Option } = Select
const columns = [
    { title: '订单号', dataIndex: 'id', key: '1' },
    { title: '日期', dataIndex: 'date', key: '2' },
    { title: '用户名称', dataIndex: 'customerName', key: '3' },
    { title: '手机号', dataIndex: 'phone', key: '4' },
    { title: '产品名称', dataIndex: 'type', key: '5' },
    { title: '货款金额(万)', dataIndex: 'money', key: '6' },
    { title: '货款利率', dataIndex: 'interestRate', key: '7' },
    { title: '收款人', dataIndex: 'serviceName', key: '8' },
    { title: '订单类型', dataIndex: 'order', key: '9' },
];
class form extends Component {
    render() {
        let { lists: { data } } = this.props
        return (
            <div className="content">
                <div className="top">
                    <input type="text" placeholder="订单号/用户名/手机号" />
                </div>
                <div className='main'>
                    <Form
                        layout="inline"
                    >
                        <Form.Item label={'处理时间'} >
                            <RangePicker />
                        </Form.Item>
                        <Form.Item label={'金额范围'} >
                            <Input
                                type="number"
                                placeholder="10000"
                                style={{ width: 100 }}
                            />
                            &nbsp;&nbsp;-&nbsp;&nbsp;
                     <Input
                                type="number"
                                placeholder="20000"
                                style={{ width: 100 }}
                            />
                        </Form.Item>
                        <Form.Item label={'处理状态'} >
                            <Radio.Group defaultValue="all">
                                <Radio.Button value={"all"}>
                                    全部</Radio.Button>
                                {
                                    types.map((item, key) => {
                                        return <Radio.Button
                                            key={key}
                                            value={key}>
                                            {item}</Radio.Button>
                                    })
                                }
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item label={'转单类型'} >
                            <Select defaultValue="default">
                                <Option value={"default"}>
                                    请选择类型
                        </Option>
                                {
                                    idType.map((item, key) => <Option
                                        key={key} value={item}>
                                        {item}
                                    </Option>)
                                }
                            </Select>
                        </Form.Item>
                        <Form.Item label={'客服名称'} >
                            <Select defaultValue="default">
                                <Option value={"default"}>
                                    请选择客服
                        </Option>
                                {
                                    servieName.map((item, key) => <Option
                                        key={key} value={item}>
                                        {item}
                                    </Option>)
                                }
                            </Select>
                        </Form.Item>
                    </Form>
                    <div className='bodys'>
                        <Table columns={columns} key={data.key} dataSource={data} scroll={{ x: 1300 }} >
                        </Table>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(
    state => {
        return state
    }
)(form)