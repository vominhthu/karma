import React, { Component } from 'react'

export default class Sale extends Component {
    render() {
        return (
            <div className="sale">
                <div className="sale-right">
                    <div className="sale-right-row">
                        <div className="sale-item">
                            {/* <span>Sneaker for sports</span> */}
                            <div className="right-img">
                                <img src="./image/sd/c1.jpg"/>
                            </div>
                        </div>
                        <div className="sale-item">
                            {/* <span>Sneaker for sports</span> */}
                            <div className="right-img">
                                <img src="./image/sd/c2.jpg"/>
                            </div>
                        </div>
                    </div>
                    <div className="sale-right-row">
                        <div className="sale-item">
                            {/* <span>Sneaker for sports</span> */}
                            <div className="right-img">
                                <img src="./image/sd/c3.jpg"/>
                            </div>
                        </div>
                        <div className="sale-item">
                            {/* <span>Sneaker for sports</span> */}
                            <div className="right-img">
                                <img src="./image/sd/c4.jpg"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sale-left">
                    <div className = "left-img">
                        <img src="./image/sd/c5.jpg"/>
                    </div>
                </div>
            </div>
        )
    }
}
