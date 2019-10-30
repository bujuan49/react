import { GETUSERINFO } from '../actionType'
const user = (state = {
    info:{}
}, action) => {
    switch (action.type) {
        case GETUSERINFO:
            let newState = {info:{...state.info}}
            newState.info = action.info
            return newState
        default:
            return state
    }
}
export default user