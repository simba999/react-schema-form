import React, {Component} 	from "react";
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';
import Item from './item.js';

let data = [
	{
		"isHeart": false,
		"isShield": true,
		"isGreen": true,
		"starMark": 0,
		"isEndToday": true,
		"value": 0
	}
]

export default class LastService extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isHeart: false,
			isShield: true,
			isGreen: true,
			starMark: 0,
			isEndToday: true,
			price: 0
		}
	}

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
						<Item isHeart={this.state.isHeart} isShield={this.state.isShield} isGreen={this.state.isGreen} 
								starMark={this.state.starMark} isEndToday={this.state.isEndToday} price={this.state.price}/>
						<Item isHeart={this.state.isHeart} isShield={this.state.isShield} isGreen={this.state.isGreen} 
								starMark={this.state.starMark} isEndToday={this.state.isEndToday} price={this.state.price}/>
						<Item isHeart={this.state.isHeart} isShield={this.state.isShield} isGreen={this.state.isGreen} 
								starMark={this.state.starMark} isEndToday={this.state.isEndToday} price={this.state.price}/>
					</div>
					<div style={{height:300,backgroundColor:"white",display:"flex"}}>
						<Item isHeart={this.state.isHeart} isShield={this.state.isShield} isGreen={this.state.isGreen} 
								starMark={this.state.starMark} isEndToday={this.state.isEndToday} price={this.state.price}/>
						<Item isHeart={this.state.isHeart} isShield={this.state.isShield} isGreen={this.state.isGreen} 
								starMark={this.state.starMark} isEndToday={this.state.isEndToday} price={this.state.price}/>
					</div>
				</React_Bootstrap_Carousel>
			</div>
		);
	}
}
