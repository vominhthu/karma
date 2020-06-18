import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="row footer-area">
                    <div className="about-us footer-item">
                        <h4 className="footer-title">
                            About Us
                        </h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua
                        </p>
                    </div>
                    <div className="news-letter footer-item">
                        <h4 className="footer-title">
                            Newsletter
                        </h4>
                        <form className="form-newletter">
                            <p>Stay update with our latest</p>
                            <input type="text" className="input-newsletter" />
                            <button className="btn-newsletter"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                        </form>
                    </div>
                    <div className="instagram-feed footer-item">
                        <h4 className="footer-title">
                            Instagram Feed
                        </h4>
                        <div className="instagram-feed-row">
                            <div className="instagram-image">
                                <img src="./image/elements/g1.jpg" />
                            </div>
                            <div className="instagram-image">
                                <img src="./image/elements/g2.jpg" />
                            </div>
                            <div className="instagram-image">
                                <img src="./image/elements/g3.jpg" />
                            </div>
                            <div className="instagram-image">
                                <img src="./image/elements/g4.jpg" />
                            </div>
                        </div>
                        <div className="instagram-feed-row">
                            <div className="instagram-image">
                                <img src="./image/elements/g5.jpg" />
                            </div>
                            <div className="instagram-image">
                                <img src="./image/elements/g6.jpg" />
                            </div>
                            <div className="instagram-image">
                                <img src="./image/elements/g7.jpg" />
                            </div>
                            <div className="instagram-image">
                                <img src="./image/elements/g8.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className="follow-us footer-item">
                        <h4 className="footer-title">
                            Follow Us
                        </h4>
                        <p>Let us be social</p>
                        <div class="follow-us-social">
							<a href="#"><i class="fa fa-facebook"></i></a>
							<a href="#"><i class="fa fa-twitter"></i></a>
							<a href="#"><i class="fa fa-dribbble"></i></a>
							<a href="#"><i class="fa fa-behance"></i></a>
						</div>
                    </div>
                </div>
                <div className="row">
                    <p className="copyright">Copyright ©2020 All rights reserved | This template is made with  by Colorlib</p>
                </div>
                
            </div>
        )
    }
}
