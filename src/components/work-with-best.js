import React, {Component} 	from "react";
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';

export default class WorkWithBest extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h2 className="center">Work with best</h2>  
                <div className="header-text">
                	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod tincidunt nunc, 
                	et auctor libero porttitor at. Proin dapibus, nunc quis volutpat auctor,
                </div>
                <div className="button-group">
                	<div className="orange-btn">All</div>
                	<div className="orange-btn">Tag Name</div>
                	<div className="orange-btn">Tag Name</div>
                	<div className="orange-btn">Tag Name</div>
                </div>
				<React_Bootstrap_Carousel
					animation={true}
					onSelect={this.onSelect}
					className="carousel"
					slideshowSpeed="100000"
				  >
					<div style={{height:300,display:"flex"}}>
						<div className="work-profile-item col-md-4">
					        <div className="item-rect">
					        	Search
					        </div>
						</div>
						<div className="work-profile-item col-md-4">
							<div className="item-rect">
					        	Search
					        </div>
						</div>
						<div className="work-profile-item col-md-4">
							<div className="item-rect">
					        	Search
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
