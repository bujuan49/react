import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as listtab from '../../../store/list/list.action'
import { bindActionCreators } from 'redux'
import Form from '../../../components/Form'
import './daikuan.css'
class daikuan extends Component {
    render() {
        let { data } = this.props
        return (
            <div className='divs'>
                <Form></Form>
            </div>
        )
    }
    componentDidMount() {
        let ids = this.props.match.params.type
        this.props.tablist(this.getId(ids))
    }
    componentWillReceiveProps(next) {
        if (this.props.match.url !== next.match.url) {
            let ids = next.match.params.type
            this.props.tablist(this.getId(ids))
        }
    }
    getId(ids) {
        switch (ids) {
            case 'qh':
                return 2
            default:
                return 1
        }
    }
}
export default connect(state => {
    return {
        data: state.lists.data
    }
}, dispatch => bindActionCreators(listtab, dispatch))(daikuan)


   // let ids = next.match.params.type
        // this.props.tablist(this.getId(ids))

