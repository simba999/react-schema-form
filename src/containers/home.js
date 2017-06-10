import React, {Component}   	from "react";
import { bindActionCreators }   from 'redux';
import {connect} from 'react-redux';

import Header from "../components/header";
import Navbar from "../components/navbar";
import SchemaForm from "../components/schema-form";
import LastService from "../components/last-service";
import Footer from "../components/footer";
import WorkWithBest from "../components/work-with-best";
import Inspiring from "../components/inspiring"; 
import Description from "../components/description";

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
        	<section className="">
    			<Header />
    			<div className="jumbotron">
	    			<Navbar />
	    			<SchemaForm />
	    		</div>
    			<LastService />
    			<WorkWithBest />
    			<Inspiring />
    			<Description />
    			<Footer />
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