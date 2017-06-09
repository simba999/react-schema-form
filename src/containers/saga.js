import React, {Component} from 'react';
import {connect} from 'react-redux';

class Saga extends Component {
    renderEpisode(episode) {

        return (
            <li key={episode.id}>
                {episode}
            </li>
        );
    }

    render() {
        return (
            <ul>
                {this.props.saga.map(this.renderCategory)}
            </ul>
        );
    }
}

function mapStateToProps({saga}) {
    return {saga};
}

export default connect(mapStateToProps)(Saga);


// {
//     "id": "3cc68250-21a8-48ce-9698-72c9bb862c3f",
//     "type": "Trade",
//     "slug": "building-home-removal-services",
//     "alias": "Tradesmen & Construction",
//     "parent": null,
//     "keywords": null
// },
