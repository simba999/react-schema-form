import React, {Component} 	from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <ul className="navbar">
                	<li className="navbar__item">
                		<Link to="/inspire">Inspire Me</Link>
                	</li>
                	<li className="navbar__item">
                		<Link to="/services">Services</Link>
                	</li>
                	<li className="navbar__item">
                		<Link to="/postjob">Post a job</Link>
                	</li>
                	<li className="navbar__item">
                		<Link to="/login">Login</Link>
                	</li>
                </ul>
            </div>

        );
    }
}
