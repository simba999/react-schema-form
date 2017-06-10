import React, {Component} 	from "react";

export default class Footer extends Component {
    render() {
        return (
            <div className="center footer">
                <div className="footer-phone"></div>
                <div className="footer-info">
                	<h3>Strap line</h3>
                	<span>Feature 1</span>
                	<span>Feature 2</span>
                	<span>Feature 3</span>
                	<span>Lorem ipsum dolor sit amet</span>
                	<span className="stars"></span>
                </div>
            </div>

        );
    }
}
