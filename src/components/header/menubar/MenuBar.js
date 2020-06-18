import React, { Component } from 'react'

export default class MenuBar extends Component {
    render() {
        return (
            <div id="menu-bar" className="menu-bar">
                <div className="menu-bar-logo">
                    <img src="https://colorlib.com/preview/theme/karma/img/logo.png" />
                </div>
                <div className="menu-bar-menu">
                    <ul className="menu-bar-ul">
                        <li className="menu-bar-li">Home</li>
                        <li className="menu-bar-li">Shop</li>
                        <li className="menu-bar-li">Blog</li>
                        <li className="menu-bar-li">Pages</li>
                        <li className="menu-bar-li">Contact</li>
                    </ul>
                </div>
            </div>
        )
    }
}
