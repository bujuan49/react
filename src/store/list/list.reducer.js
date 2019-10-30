import { LISTTAB } from '../actionType'
const list = (state = {
    data:[]
}, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case LISTTAB:
            let { datas } = action
            newState.data = datas
            return newState
        default:
            break;
    }
    return state
}
export default list