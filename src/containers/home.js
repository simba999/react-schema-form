import React, {Component}   	from "react";
import { bindActionCreators }   from 'redux';
import {connect} from 'react-redux';

import Header from "../components/header";
import Navbar from "../components/navbar";
import SchemaForm from "../components/schema-form";
import LastService from "../components/last-service";
import Footer from "../components/footer";

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
		}
	}

	componentDidMount() {
	}

	componentWillReceiveProps(nextProps, prevProps) {
		if (nextProps !== prevProps) {
		}
	}

    render() {
        return (
        	<section>
        		<div className="row">
        			<Header />
        		</div>
        		<div className="row">
        			<Navbar />
        		</div>
        		<div className="row">
        			<SchemaForm />
        		</div>
        		<div className="row">
        			<LastService />
        		</div>
        		<div className="row">
        			<Footer />
        		</div>
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
	  // fetchSaga: (id) => dispatch(fetchSaga(id)),
	}, 
	dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);