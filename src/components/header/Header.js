import React, { Component } from 'react'
import MenuBar from '../menubar/MenuBar'

export default class NavMenu extends Component {
    render() {
        return (
            <div className="header">
                <div className="menu-bar-container">
                    <MenuBar/>
                </div>
            </div>
        )
    }
}
