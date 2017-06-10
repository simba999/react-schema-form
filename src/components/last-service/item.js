import React, {Component, PropTypes} 	from "react";
// import PropTypes from 'prop-types';

class Item extends Component {
    constructor(props) {
        super(props);
        const { isHeart, isShield, isGreen, starMark, isEndToday, price, key } = this.props;
        this.state = {
            isHeart: isHeart,
            isShield: isShield,
            isGreen: isGreen,
            starMark: starMark,
            isEndToday: isEndToday,
            price: price,
            key: key
        }

        console.log("props: ", this.props);
    }

    render() {
        const { starMark, price } = this.state;

        return (
            <div className="service-item" key={this.state.key}>
                <div className="item-rect">
                    <div className="item-rect__header">
                        {
                            this.state.isHeart?
                                <span className="glyphicon glyphicon-heart"></span>
                            :
                                <span className="glyphicon glyphicon-remove"></span>
                        }
                    </div>
                    <div className="item-rect__footer">
                        <h3>Service heading</h3>
                        <div className="icon-group">
                            <span className="guard">
                                {
                                    this.state.isShield?
                                        'shieldTrue '
                                    :
                                        'shieldFalse '
                                }
                            </span>
                            <span className="monster">
                                {
                                    this.state.isGreen?
                                        'greenTrue '
                                    :
                                        'greenFalse '
                                }
                            </span>
                            <span className="stars">
                                { starMark }
                            </span>
                            <span className="right-position">
                                {
                                    this.state.isEndToday?
                                        'Ends today '
                                    :
                                        'not Ends today '
                                }
                            </span>
                        </div>
                        <div className="icon-group">
                            <div>Distance</div>
                            <span>{ price } </span>
                        </div>
                    </div>
                </div>
                <div className="item-nav">
                    <div className="item-nav__button">A Tag</div>
                    <div className="item-nav__button">Another Tag</div>
                    <div className="item-nav__button">Another Tag</div>
                </div>
            </div>

        );
    }
}

Item.propTypes = {
    isHeart       : PropTypes.bool,
    isShield      : PropTypes.bool,
    isGreen       : PropTypes.bool,
    starMark      : PropTypes.number,
    isEndToday    : PropTypes.bool,
    price         : PropTypes.number,
    key           : PropTypes.number
};

export default Item;

