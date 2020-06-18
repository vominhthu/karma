import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
            <div className="banner">
                <div className="banner-item">
                    <div className="banner-right">
                        <h2>Nike New Collection !</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                        </p>
                        <div className="group-button">
                            <button className="btn-header-add"><i class="fa fa-plus" aria-hidden="true"></i></button><span>Add to cart</span>
                        </div>
                    </div>
                    <div className="banner-left">
                        <img src="./image/banner/banner-img.png" />
                    </div>
                </div>
            </div>
        )
    }
}
