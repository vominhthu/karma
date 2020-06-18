import React, { Component } from 'react'

export default class Introduce extends Component {
    render() {
        return (
            <div className="introduce">
                <div className="introduce-item">
                    <p><i class="fa fa-truck" aria-hidden="true"></i></p>
                    <p className= "title">Free Delivery</p>
                    <p className="bottom-title">Free Shipping on all order</p>
                </div>
                <div className="introduce-item">
                    <p><i class="fa fa-refresh" aria-hidden="true"></i></p>
                    <p className= "title">Return Policy</p>
                    <p className="bottom-title">Free Shipping on all order</p>
                </div>
                <div className="introduce-item">
                    <p><i class="fa fa-headphones" aria-hidden="true"></i></p>
                    <p className= "title">24/7 Support</p>
                    <p className="bottom-title">Free Shipping on all order</p>
                </div>
                <div className="introduce-item">
                    <p><i class="fa fa-database" aria-hidden="true"></i></p>
                    <p className= "title">Secure Payment</p>
                    <p className="bottom-title">Free Shipping on all order</p>
                </div>
        </div>
        )
    }
}
