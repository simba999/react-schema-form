/* global $:true */

import React, {
  Component,
  PropTypes
}                                 from 'react';
import {browserHistory, Link}     from 'react-router';
import { Field, reduxForm }       from 'redux-form'
// import {Motion, spring, presets}  from 'react-motion';

import axios from "axios";
import Form from "react-jsonschema-form";

const schema = {
    title: "Trade",
    type: "object",
    required: ["tradeSlugs", "skillSlugs"],
    properties: {
      tradeSlugs: {
        type: "string",
        title: "Select a trade",
      },
      skillSlugs: {
        type: "string",
        title: "Select skills",
      },
    }
};

const uiSchema = {
    tradeSlugs: {
      "ui:autofocus": true,
      "ui:placeholder": "Enter trade here...",
    },
    skillSlugs: {
      "ui:placeholder": "Enter skills here...",
    }
};

const log = (type) => console.log.bind(console, type);

class WizardFormTradePage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {

    }
  }

  componentWillMount() {
    // window.addEventListener('scroll', this.handleWindowScroll);
  }

  componentWillUnmount() {
    // window.removeEventListener('scroll', this.handleWindowScroll);
  }

  render() {

    return (
      <div>
          <Form schema={schema}
                uiSchema={uiSchema}
                onChange={log("changed")}
                onSubmit={log("submitted")}
                onError={log("errors")} />
          <button type="button" className="previous">
              Previous
          </button>
          <button type="submit" className="next" onClick={ this.props.nextPage }>Next</button>
      </div>
    );
  }

}

WizardFormTradePage.propTypes = {
  previousPage  : React.PropTypes.func,
  nextPage      : React.PropTypes.func
}

export default reduxForm({
  form: 'wizard',  //Form name is same
  destroyOnUnmount: false
})(WizardFormTradePage)
