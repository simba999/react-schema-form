import React from 'react';
// import Slider from 'react-slick';
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
];

function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
        <div
            className="slick-arrow glyphicon glyphicon-menu-left"
            style={{...style, display: 'block'}}
            onClick={onClick}
        ></div>
    );
}

function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
        <div
            className="slick-arrow glyphicon glyphicon-menu-right"
            style={{...style, display: 'block'}}
            onClick={onClick}
        ></div>
    );
}

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

export default class Dynamic extends React.Component {
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
        };

        let itemList = ItemList(data);
        return(
            <Slider {...settings}>
                {
                    itemList
                }
            </Slider>
        );
    }


}