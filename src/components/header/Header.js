import React, { Component } from 'react'

export default class NavMenu extends Component {
    render() {
        return (
            <div id="nav-menu" className="nav-menu">
                <div className="nav-menu-logo">
                    <img src="https://colorlib.com/preview/theme/karma/img/logo.png" />
                </div>
                <div className="nav-menu-menu">
                    <ul className="ul-menu">
                        <li className="li-menu">Home</li>
                        <li className="li-menu">Shop</li>
                        <li className="li-menu">Blog</li>
                        <li className="li-menu">Pages</li>
                        <li className="li-menu">Contact</li>
                    </ul>
                </div>
            </div>
        )
    }
}
