/* global $:true */

import React, { Component }         from 'react';
import PropTypes                    from 'prop-types';
import Form                         from "react-jsonschema-form";
import { Field, reduxForm }         from 'redux-form';
import { connect }                  from 'react-redux';

import {
  fetchSaga,
  saveSelectedSaga,
  getSelectedSaga
}                                   from '../../actions/index';

import  { bindActionCreators }      from 'redux';


const log = (type) => console.log.bind(console, type);

class WizardFormTradePage extends React.Component {

  constructor(props, context) {
    super(props, context);

    const { schema, uiSchema, validate } = this.props.schemaData;

    this.state = {
      form: true,
      schema,
      uiSchema,
      validate,
      liveValidate: true,
      shareURL: null,
    };

    console.log("state:   ", this.state)
  }

  componentWillMount() {

  }

  componentDidMount() {
    const { ArrayFieldTemplate } = this.props.schemaData;
    const { getSelectedSaga, currentPage } = this.props;

    getSelectedSaga(currentPage);
    
    this.setState({ form: false }, _ =>
      this.setState({ ...this.props.schemaData, form: true, ArrayFieldTemplate })
    );
  }

  componentWillUnmount() {
  }

  componentWillReceiveProps(nextProps, prevProps) {
    if (nextProps != prevProps) {
      const { schema, uiSchema, formData, validate, ArrayFieldTemplate } = nextProps.schemaData;
      console.log("WILL: ", nextProps)
      this.setState({ formData: nextProps.formData.sagaSelected.data.data });
      this.setState({ ...nextProps.schemaData, form: true, ArrayFieldTemplate });
    }
  }

  onFormDataChange = ({ formData }) =>
    this.setState({ formData, shareURL: null });

  onSubmit = (formData) => {
    const { saveSelectedSaga, currentPage } = this.props;
    saveSelectedSaga(formData, currentPage);
  }

  render() {
    const {
      schema,
      uiSchema,
      formData,
      liveValidate,
      validate,
      ArrayFieldTemplate,
      transformErrors,
    } = this.state;

    return (
      <div>
          <Form schema={schema}
                uiSchema={uiSchema}
                formData={formData}
                onChange={log("changed")}
                onSubmit={({formData}) => this.onSubmit(formData)}
                validate={this.state.validate}
                ArrayFieldTemplate={ArrayFieldTemplate}
                liveValidate={liveValidate}
                transformErrors={transformErrors}
                onError={log("errors")} />
          {
            typeof this.props.previousPage != "undefined" ?
              <button type="button" className="previous" onClick={ this.props.previousPage }>
                  Previous
              </button>
            :
              ''
          }
          {
            typeof this.props.nextPage != "undefined" ?
              <button type="button" className="next" onClick={ this.props.nextPage }>
                  next
              </button>
            :
              <button type="submit" className="next">
                  next submit
              </button>
          }
          
      </div>
    );
  }

}

WizardFormTradePage.propTypes = {
  previousPage  : PropTypes.func,
  nextPage      : PropTypes.func,
  schemaData    : PropTypes.any,
  currentPage   : PropTypes.number,
}

function mapStateToProps(state) {
    return {
      formData: state
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
    {
      fetchSaga: (id) => dispatch(fetchSaga(id)),
      saveSelectedSaga: (formData, currentPage) => dispatch(saveSelectedSaga(formData, currentPage)),
      getSelectedSaga: (currentPage) => dispatch(getSelectedSaga(currentPage))
    }, 
    dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WizardFormTradePage);

