import nav from './nav/nav.reducer'
import { createStore, combineReducers, applyMiddleware } from "redux";
import user from './user/user.reducer'
import thunk from 'redux-thunk'
import lists from './list/list.reducer'
const reducer = combineReducers({
    lists,
    nav,
    user
})
const store = createStore(reducer, applyMiddleware(thunk))
export default store