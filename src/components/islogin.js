
import request from '../utils/request'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userAction from '../store/user/user.action'
const islogin = (Home) => {
    class islogin extends React.Component {
        state = {
            flag: false
        }
        render() {
            return this.state.flag && <Home {...this.props} />
        }
        componentDidMount() {
            this.props.getUserInfo(this)
            // request.get('/api/islogin').then(res => {
            //     this.setState({ flag: true })
            // }).catch(res => {
            //     if (res.status === 401) {
            //         this.props.history.push('/login')
            //     }
            // })
        }
    }
    return connect(
        (state) => state.user,
        dispath => bindActionCreators(userAction, dispath)
    )(islogin)
}
export default islogin
