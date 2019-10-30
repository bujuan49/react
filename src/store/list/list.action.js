import request from '../../utils/request'
import { LISTTAB } from '../actionType'
export const tablist = (order) => {
    return (dispatch) => {
        request.get('/api/list', {
            order
        }).then(res => {
            let datas =res.data
            // console.log(datas);
            dispatch({
                type: LISTTAB,
                datas
            })

        })
    }
}