import React, {Component}   	from "react";
import WizardForm           	from "../components/wizard/WizardForm";
import { connect }          	from 'react-redux';
import {
  fetchSaga
}                               from '../actions/index';
import { bindActionCreators }   from 'redux';

class Episode extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isForm: false
		}
	}

	componentDidMount() {
	}

	componentWillReceiveProps(nextProps, prevProps) {
		if (nextProps !== prevProps) {
			if (nextProps.schemaData.categorySelected === null) {

			} else {
				this.setState({ isForm: nextProps.schemaData.categorySelected.isForm })
			}

		}
	}

    render() {
        return (
        	<div>
        		{
        			this.state.isForm === true?
           				<WizardForm />
           			:
           				''
        		}
           	</div>
        );
    }
}

function mapStateToProps(state) {
	return {
	  schemaData: state
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
	{
	  fetchSaga: (id) => dispatch(fetchSaga(id)),
	}, 
	dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Episode);