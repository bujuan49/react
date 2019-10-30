import loadable from "react-loadable"
import React from "react"
function  Loing() {
    return <h3>loading</h3>
}
export const home=loadable({
    loading:Loing,
    loader:()=>import("../../views/home/index")
})
export const homeindex=loadable({
    loading:Loing,
    loader:()=>import("../../views/home/component/homeindex")
})
export const loding=loadable({
    loading:Loing,
    loader:()=>import("../../views/login")
})
export const dingdan=loadable({
    loading:Loing,
    loader:()=>import("../../views/home/component/homeset")
})
export const dk=loadable({
    loading:Loing,
    loader:()=>import("../../views/home/component/daikuan")
})
export const change=loadable({
    loading:Loing,
    loader:()=>import("../../views/home/component/change")
})
// export const homeindex=loadable({
//     loading:Loing,
//     loader:()=>import("../../views/home/component/homeindex")
// })