import React, { Component } from 'react'
import Header from './header/Header'
import Introduce from './introduce/Introduce'
import Sale from './sale/Sale'
import Footer from './footer/Footer'

export default class App extends Component {
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    handleScroll(evt) {
        if(window.scrollY > 0) {
            document.getElementById('menu-bar').classList.add('header-scroll');
        }
        else {
            document.getElementById('menu-bar').classList.remove('header-scroll');
        }
    }
    render() {
        return (
            <React.Fragment>
            <div className="header-container">
                <Header/>
            </div>
            <section className="introduce-container">
                <Introduce/>
            </section>
            {/* <section className="sale-container">
                <Sale/>
            </section> */}
            <div className="footer-container">
                <Footer/>
            </div>
            </React.Fragment>
        )
    }
}
