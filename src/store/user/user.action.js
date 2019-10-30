import request from '../../utils/request'
import { GETUSERINFO } from '../actionType'
export const getUserInfo = (that) => {
    return (dispatch) => request.get('/api/islogin').then(res => {
        that.setState({ flag: true })
        dispatch({
            type: GETUSERINFO,
            info: res.info
        })
    }).catch(res => {
        if (res.status === 401) {
            that.props.history.push('/login')
        }
    })
}