import datas from '../../mock/index.js'
import { ADDTOPNAV, REMOVENAV } from '../actionType'
const nav = (state = {
    datas,
    topnavstate: []
}, action) => {
    switch (action.type) {
        case ADDTOPNAV: {
            let { path, name } = action
            let newState = { ...state, topnavstate: [...state.topnavstate] }
            let index = newState.topnavstate.findIndex(item => item.path === path)
            if (index !== -1) {
                let target = newState.topnavstate[index];
                newState.topnavstate.splice(index, 1)
                newState.topnavstate.unshift(target)
            } else {
                newState.topnavstate.unshift({
                    path, name
                })
            }
            return newState
        }

        case REMOVENAV:
            {
                let { path } = action
                let newState = { ...state, topnavstate: [...state.topnavstate] }
                let index = newState.topnavstate.findIndex(item => item.path === path)
                newState.topnavstate.splice(index, 1)

                return newState
            }

        default:
            return state
    }
}
export default nav