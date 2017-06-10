import React, {Component} 	from "react";

// import 'react-bootstrap-carousel/dist/bootstrap.min.css';
// import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';

export default class LastService extends Component {
	componentDidMount() {
	
	}
	render() {
		return (
			<div className="">
				<h2 className="center">Last Service</h2>  
				<React_Bootstrap_Carousel
					animation={true}
					onSelect={this.onSelect}
					className="carousel"
					slideshowSpeed="100000"
				  >
					<div style={{height:300,backgroundColor:"white",display:"flex"}}>
						<div className="service-item col-md-4">
							<div className="item-rect">
					        	<div className="item-rect__header"><span className="glyphicon glyphicon-heart"></span></div>
					        	<div className="item-rect__footer">
					        		<h3>Service heading</h3>
					        		<div className="icon-group">
					        			<span className="guard"></span>
					        			<span className="monster"></span>
					        			<span className="stars"></span>
					        			<span className="right-position">Ends today</span>
					        		</div>
					        		<div className="icon-group">
					        			<div>Distance</div>
					        			<span>Ends today</span>
					        		</div>
					        	</div>
					        </div>
					        <div className="item-nav">
					        	<div className="item-nav__button">A Tag</div>
					        	<div className="item-nav__button">Another Tag</div>
					        	<div className="item-nav__button">Another Tag</div>
					        </div>
						</div>
						<div className="service-item col-md-4">
							<div className="item-rect">
					        	<div className="item-rect__header"><span className="glyphicon glyphicon-heart"></span></div>
					        	<div className="item-rect__footer">
					        		<h3>Service heading</h3>
					        		<div className="icon-group">
					        			<span className="guard"></span>
					        			<span className="monster"></span>
					        			<span className="stars"></span>
					        			<span className="right-position">Ends today</span>
					        		</div>
					        		<div className="icon-group">
					        			<div>Distance</div>
					        			<span>Ends today</span>
					        		</div>
					        	</div>
					        </div>
					        <div className="item-nav">
					        	<div className="item-nav__button">A Tag</div>
					        	<div className="item-nav__button">Another Tag</div>
					        	<div className="item-nav__button">Another Tag</div>
					        </div>
						</div>
						<div className="service-item col-md-4">
							<div className="item-rect">
					        	<div className="item-rect__header"><span className="glyphicon glyphicon-heart"></span></div>
					        	<div className="item-rect__footer">
					        		<h3>Service heading</h3>
					        		<div className="icon-group">
					        			<span className="guard"></span>
					        			<span className="monster"></span>
					        			<span className="stars"></span>
					        			<span className="right-position">Ends today</span>
					        		</div>
					        		<div className="icon-group">
					        			<div>Distance</div>
					        			<span>Ends today</span>
					        		</div>
					        	</div>
					        </div>
					        <div className="item-nav">
					        	<div className="item-nav__button">A Tag</div>
					        	<div className="item-nav__button">Another Tag</div>
					        	<div className="item-nav__button">Another Tag</div>
					        </div>
						</div>
					</div>
					<div style={{height:300,backgroundColor:"white",display:"flex"}}>
					  <div className="service-item col-md-4">AAA</div>
					  <div className="service-item col-md-4">BBB</div>
					  <div className="service-item col-md-4">CCC</div>
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
