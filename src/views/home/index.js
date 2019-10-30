import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import RouterView from '../../router/rouerviews'
import './index.css'
import { connect } from 'react-redux'
import { Layout, Menu, Icon, DatePicker } from 'antd';
import moment from 'moment';
import { bindActionCreators } from 'redux'
import { Modal, Button } from 'antd';
import * as navAction from '../../store/nav/nav.action'
const { Sider, Content, Header } = Layout;
const { RangePicker } = DatePicker;
const { SubMenu } = Menu;
const dateFormat = 'YYYY/MM/DD';

class index extends Component {
    render() {
        let { datas, route, info, topnavstate } = this.props
        return (
            <Layout className='wrap'>
                <Sider>
                    <div className='user'>
                        <dl className='dls'>
                            <p className='p'></p>
                            <dt>
                                <img src={'http://localhost:3000' + info.facePhoto} alt="" />
                            </dt>
                            <dd>北京王府井</dd>
                        </dl>
                    </div>
                    <Menu theme="dark" mode="inline">
                        <SubMenu
                            title={
                                <span>
                                    <Icon type="user" />
                                    <NavLink to='/home/index' >首页</NavLink>
                                </span>}>
                        </SubMenu>
                        {
                            datas.map((item, key) => item.children && <SubMenu
                                key={key}
                                title={
                                    <span>
                                        <Icon type="user" />
                                        <span> {item.name}</span>
                                    </span>}>
                                {
                                    item.children.map((item, key) =>
                                        <Menu.Item onClick={this.changes.bind(this, item.path, item.name)} key={key}><NavLink to={item.path} >{item.name}</NavLink></Menu.Item>)
                                }
                            </SubMenu>)
                        }
                    </Menu>
                    <button onClick={()=>this.props.history.push('/home/change')} className='buts'>修改头像</button>
                    <button           title="Modal"
                    visible={123123}
                     onOk={123123}
                     onCancel={this.hideModal}
                    okText="确认"
                  cancelText="取消" className='buts' onClick={()=>this.props.history.push('/login')}>退出</button>
                </Sider>

                <Layout>
                    <Header style={{ display: 'flex' }}>
                        {
                            topnavstate.map((item, key) =>
                                <div className='dist' key={key}><span className='spans'><NavLink to={item.path}> {item.name}</NavLink></span><span onClick={this.removes.bind(this, item.path)}>X</span></div>)
                        }


                    </Header>
                    <Content>

                        <RouterView data={route} /></Content>
                </Layout>
            </Layout>
        )
    }
    componentDidMount() {

    }
    changes(path, name) {
        this.props.addtopnav(path, name)
    }
    removes(path) {
        this.props.removenav(path)
    }
}

export default connect(state => {
    return {
        ...state.nav,
        ...state.user
    }
},
    dispatch => bindActionCreators(navAction, dispatch)


)(index)


