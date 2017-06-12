import React, {Component}   	from "react";
import { bindActionCreators }   from 'redux';
import {connect} from 'react-redux';

import SchemaForm from "../components/schema-form";
import LastService from "../components/last-service";

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
		}
	}

	componentDidMount() {
	}

	componentWillReceiveProps(nextProps, prevProps) {

	}

    render() {
        return (
        	<section className="">
    			<div className="jumbotron">
	    			<SchemaForm />
	    		</div>
    			<LastService />
           	</section>
        );
    }
}

function mapStateToProps(state) {
	return {
	  state: state
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
	{

	}, 
	dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);