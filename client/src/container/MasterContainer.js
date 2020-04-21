import React, { Component } from 'react'
import Sidebar from '../common/Sidebar/Sidebar'
import Header from '../common/Header/Header'
import Modal from '../common/Modal/Modal'

class MasterContainer extends Component {
    render() {
        return (
            <div className="row no-gutters">
                <Sidebar />
                <div>
                    <Header head="I come as a prop" />
                    <Modal />
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default MasterContainer
