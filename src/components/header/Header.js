import React, { Component } from 'react'
import MenuBar from './menubar/MenuBar'
import Banner from './banner/Banner'

export default class NavMenu extends Component {
    render() {
        return (
            <div className="header">
                <div className="menu-bar-container">
                    <MenuBar/>
                </div>
                <div className="banner-container">
                    <Banner/>
                </div>
            </div>
        )
    }
}
