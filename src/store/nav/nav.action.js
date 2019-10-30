import {
    ADDTOPNAV,
    REMOVENAV
} from '../actionType'
export const addtopnav = (path, name) => {
    return {
        type: ADDTOPNAV,
        path, name
    }
}
export const removenav = (path) => {
    return {
        type: REMOVENAV,
        path
    }
}