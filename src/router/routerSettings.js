// import home from "../views/home"
// import loagind from "../views/longind"
import islogin from '../components/islogin'
import { home, loding, homeindex, dingdan, dk,change } from "./login/index"
const routes = [
    {
        path: "/home",
        Component: islogin(home),
        child: [
            {
                path: "/home/index",
                Component: homeindex
            },
            {
                path: "/home/dingdan/:type",
                Component: dk
            },
            {
                path: "/home/change",
                Component:change
            }

        ]
    },
    {
        path: '/login',
        Component: loding
    },
    {
        path: "/",
        redirect: "/home"
    },
]

export default routes;