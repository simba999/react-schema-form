import React, {Component} 	from "react";
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';

export default class Inspiring extends Component {
    render() {
        return (
            <div className="">
                <h2 className="center">Inspiring Profiles</h2>  
                <div className="header-text">
                	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod tincidunt nunc, 
                	et auctor libero porttitor at. Proin dapibus, nunc quis volutpat auctor,
                </div>
				<React_Bootstrap_Carousel
					animation={true}
					onSelect={this.onSelect}
					className="carousel"
					slideshowSpeed="100000"
				  >
					<div style={{height:300,display:"flex"}}>
						<div className="profile-item col-md-4">
					        <div className="profile-item__header">
				        		<div className="item-nav">
						        	<div className="item-nav__button">A Tag</div>
						        	<div className="item-nav__button">Another Tag</div>
						        	<div className="item-nav__button">Another Tag</div>
						        </div>
					        </div>
					        <div className="profile-item__body">
					        	<div className="profile-image"></div>
					        	<div className="profile-report"><span className="warngin-sign"></span>Report this page?</div>
					        </div>
					       	<br />
					        <div className="profile-item__footer">
					        	<div className="profile-icon"></div>
					        	<div className="profile-count"></div>
					        	<div className="profile-facebook"></div>
					        	<div className="follower-count"></div>
					        </div>
						</div>
						<div className="profile-item col-md-4">
							<div className="item-rect">
					        	Search
					        </div>
						</div>
						<div className="profile-item col-md-4">
							<div className="item-rect">
					        	Search
					        </div>
						</div>
					</div>
					<div style={{height:300,backgroundColor:"white",display:"flex"}}>
					  <div className="profile-item col-md-4">AAA</div>
					  <div className="profile-item col-md-4">BBB</div>
					  <div className="profile-item col-md-4">CCC</div>
					</div>
					<div style={{height:300,backgroundColor:"lightpink",display:"flex"}}>
					  <div className="col-md-4">AAA</div>
					  <div className="col-md-4">BBB</div>
					  <div className="col-md-4">CCC</div>
					</div>
				</React_Bootstrap_Carousel>
            </div>

        );
    }
}
