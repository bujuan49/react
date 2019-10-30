import React, { Component } from 'react'
import './index.css'
import request from '../../utils/request'
import Cookie from 'js-cookie'

class index extends Component {
    state = {
        flags: true,
        timeOut: 2,
        tip: '验证码',
        password: '',
        checkcode: '',
        phone: ''
    }
    render() {
        let { flags, tip, password, phone, checkcode } = this.state
        return (
            <div className='wrap'>
                <div className='wel'>Welcome</div>
                <div className='smallText'>赚赚金融 开创信贷“1＋N”模式的综合互联网金融服务共享平台</div>
                <div className='box'>
                    <div className='zhuan iconfont icon-logo'></div>
                    <div className='zi_1'>赚赚金融渠道管理系统</div>
                    <input type="text" placeholder='用户名' value={phone} onChange={(e) => { this.setState({ 'phone': e.target.value }) }} />
                    <input type="text" placeholder='密码' value={password} onChange={(e) => { this.setState({ 'password': e.target.value }) }} />
                    <input className='input_3' type="text" placeholder='验证码' value={checkcode} onChange={(e) => { this.setState({ 'checkcode': e.target.value }) }} />
                    <button className={`an ${!flags ? 'active' : ''}`} type="button" onClick={this.veri} >{tip}</button>
                    <div className='dontpass'>忘记密码</div>
                    <button className='masger' onClick={this.submits}>
                        登录</button>
                </div>
                <div className='bottom'></div>
                <div className='bottom_1'>Copyright@2016 ZHUANZHUANJINRONG ALL RIGHTS RESERVED. 赚赚金融 保留所有权利</div>
            </div>
        )

    }
    submits = () => {
        let {history} = this.props
        let { password, phone, checkcode } = this.state
        request.post('/api/login', {
            phone, password, checkcode
        }).then(res => {
     
       let {code,message} =res
       if(code){
        console.log('错误') 
       }else{
        Cookie.set('sessionid',res.sessionId,{
            expires:3
        })
        history.push('/home')
       }
        })

    }
    veri = () => {
        let { flags, timeOut } = this.state;
        this.setState({ flags: false, tip: `${timeOut}秒后获取` })
        if (!flags) { return } else { }
        this.tiemr = setInterval(() => {
            timeOut--
            if (timeOut <= 0) {
                clearInterval(this.tiemr)
                request.get('/api/checkCode')
                    .then(res => {
                        this.setState({ timeOut: 2, flags: true, tip: res.Verification })
                    })
            }
            this.setState({ tip: `${timeOut}秒后获取` })
        }, 1000);


    }
}
export default index
// http://localhost:3000/api/login?phone=12412341234&password=anere
// 19qt