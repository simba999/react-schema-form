import React from 'react';
import Item from './item.js';
import Carousel from 'nuka-carousel';

let data = [
    {
        "isHeart": false,
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
    },
    {
        "isHeart": true,
        "isShield": false,
        "isGreen": true,
        "starMark": 5,
        "isEndToday": true,
        "price": 0
    }
];

function ItemList(data) {
    let List = [];
    data.map((item, key) => {
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
            List.push(<div></div>);
        }
    });

    return List
}

let Decorators = [
{
  component: React.createClass({
    render() {
      return (
        <span
        	style={this.getButtonStyles(this.props.currentSlide === 0)}
        	className="glyphicon glyphicon-menu-left"
          	onClick={this.props.previousSlide}>
        </span>
      )
    },
    getButtonStyles(disabled) {
        return {
          border: 0,
          color: 'black',
          padding: 10,
          outline: 0,
          opacity: disabled ? 0.3 : 1,
          cursor: 'pointer'
        }
    }
  }),
  position: 'CenterLeft', 
},
{
  component: React.createClass({
    render() {
      return (
        <span
        	style={this.getButtonStyles(this.props.currentSlide === Math.floor(this.props.slideCount / 3))}
        	className="glyphicon glyphicon-menu-right"
          	onClick={this.props.nextSlide}>
        </span>
      )
    },
    getButtonStyles(disabled) {
        return {
          border: 0,
          color: 'black',
          padding: 10,
          outline: 0,
          opacity: disabled ? 0.3 : 1,
          cursor: 'pointer'
        }
    }
  }),
  position: 'CenterRight', 
}
];

export default class Index extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isHeart: false,
            isShield: true,
            isGreen: true,
            starMark: 0,
            isEndToday: true,
            price: 0,
            slideCount: data.length,
            countPerSlide: 3,
            slideIndex: 0,

        }
    }

    render() {
    	let itemList = ItemList(data);

    	return (
    		<Carousel
    			ref="carousel"
    			decorators={Decorators}
    			slideIndex={this.state.slideIndex}
    			slidesToShow={this.state.countPerSlide}
    			afterSlide={newSlideIndex => this.setState({ slideIndex: newSlideIndex })}
    			>
                {
                    itemList
                }
    		</Carousel>
    	)
    }

}