/* global $:true */

import React, {
  Component,
  PropTypes
}                         from 'react';
import Form               from "react-jsonschema-form";

const schema = {
	title: "Budget",
  type: "object",
  required: ["budgetLow", "budgetHigh"],
  properties: {
    budgetLow: {
      type: "string",
      title: "Maximium budget",
    },
    budgetHigh: {
      type: "string",
      title: "Minium budget",
    },
  }
}

const uiSchema = {
	budgetLow: {
    "ui:placeholder": "Enter a Maximium budget"
  },
  budgetHigh: {
    "ui:placeholder": "Enter a Minium budget"
  }
}

const log = (type) => console.log.bind(console, type);

class WizardFormBudgetPage extends React.Component {

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
          <button type="button" className="previous" onClick={ this.props.previousPage }>
              Previous
          </button>
          <button type="submit" className="next" onClick={ this.props.nextPage }>Next</button>
      </div>
    );
  }

}

WizardFormBudgetPage.propTypes = {
  previousPage  : React.PropTypes.func,
  nextPage      : React.PropTypes.func
}

export default WizardFormBudgetPage;
