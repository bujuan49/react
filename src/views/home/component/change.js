import React, { Component } from 'react'
import { connect } from 'react-redux'
import './change.css'
import { resolve } from 'path';
class change extends Component {
    render() {
        return (
            <div>
                <div className='setimg'>
                    <img className='iii' src="" alt="" />
                    <input type="file" placeholder='这是消息' onChange={this.submitImg} />1
                </div>

            </div>
        )
    }
    submitImg = (e) => {
        let files = e.target.files[0];
        console.log(files)
        let fileReader = new FileReader();
        fileReader.readAsDataURL(files);
        fileReader.onload= (data) =>{
            console.log(fileReader.result)
        }

    }
    creatImage(src){
        let img = new Image()
       return new Promise((resolve,reject)=>{
        img.onload=()=>{
      
        }
       })
    }
}

export default connect(
    state => {
        return {
            ...state.nav
        }
    }
)(change)