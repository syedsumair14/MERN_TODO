import React, { Component } from 'react'
import Sidebar from '../common/Sidebar/Sidebar'
import Header from '../common/Header/Header'

class MasterContainer extends Component {
    render() {
        return (
            <div className="row no-gutters">
                <Sidebar />
                <div>
                    <Header head="I come as a prop" />
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default MasterContainer
