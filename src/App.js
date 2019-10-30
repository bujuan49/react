import React from 'react';
import ReactIndex from './router/index'
import 'antd/dist/antd.css';
import './static/scss/common.scss'
import './static/font/iconfont.css'
// import { DatePicker } from 'antd';
import { Provider } from 'react-redux'
import store from './store/index'
function App() {
  return <Provider store={store}><ReactIndex /> </Provider>
}
export default App;
