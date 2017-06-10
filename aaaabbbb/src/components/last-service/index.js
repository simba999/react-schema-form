import React, { Component, PropTypes } from 'react';
import Carousel from 'nuka-carousel';
import Slider from 'react-slick';
import Item from './item.js';

let data = [
	{
		"isHeart": true,
        "isShield": true,
        "isGreen": true,
        "starMark": 5,
        "isEndToday": true,
        "price": 0
	},
	{
		"isHeart": false,
        "isShield": true,
        "isGreen": false,
        "starMark": 5,
        "isEndToday": true,
        "price": 0
	},
	{
		"isHeart": true,
        "isShield": false,
        "isGreen": true,
        "starMark": 5,
        "isEndToday": true,
        "price": 0
	}
]

function SamplePrevArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className="slick-arrow glyphicon glyphicon-menu-left"
      style={{...style, display: 'block'}}
      onClick={onClick}
    ></div>
  );
}

function SampleNextArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className="slick-arrow glyphicon glyphicon-menu-right"
      style={{...style, display: 'block'}}
      onClick={onClick}
    ></div>
  );
}

function ItemList(data) {
	let List = []
	data.map((item, key) => {
  		console.log("Key: ", key)
  		if (data.length > 0) {
  			let isHeart = item['isHeart'];
			let isShield = item['isShield'];
			let isGreen = item['isGreen'];
			let starMark = item['starMark'];
			let isEndToday = item['isEndToday'];
			let price = item['price'];

			List.push(
				<Item key={key} isHeart={isHeart} isShield={isShield} isGreen={isGreen} 
								starMark={starMark} isEndToday={isEndToday} price={price} />
			)
  		}
  		else {
  			List.push(<div></div>)
  		}
	});

	return List
}

export default class Index extends React.Component {
  constructor(props){
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
  	const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: <SamplePrevArrow />,
      nextArrow: <SampleNextArrow />
    }

    let itemList = ItemList(data);
    console.log("ItemList:  ", itemList)
    return(
	      		<Slider {...settings}>
		          {
		          	itemList
		          }
		        </Slider>
    );
  }
  
  
}