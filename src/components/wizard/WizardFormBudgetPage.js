/* global $:true */

import React, {
  Component
}                         from 'react';
import PropTypes          from 'prop-types';
import Form               from "react-jsonschema-form";

const schema = {
	title: "Budget",
  type: "object",
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
    const validate = (formData, errors) => {
      console.log("FormData: ", formData);
      if (formData.budgetLow == '' || typeof formData.budgetLow == "undefined") {
        errors.budgetLow.addError("The field is required");
      }
      if (formData.budgetHigh == '' || typeof formData.budgetHigh == "undefined") {
        errors.budgetHigh.addError("The field is required");
      }
      return errors;
    }

    return (
      <div>
          <Form schema={schema}
                uiSchema={uiSchema}
                onChange={log("changed")}
                onSubmit={log("submitted")}
                validate={validate}
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
  previousPage  : PropTypes.func,
  nextPage      : PropTypes.func
}

export default WizardFormBudgetPage;
