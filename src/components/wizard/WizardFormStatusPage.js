/* global $:true */

import React, {
  Component
}                           from 'react';
import PropTypes            from 'prop-types';
import Form                 from "react-jsonschema-form";

const schema = {
	title: "Status",
  type: "object",
  // required: ['status_state'],
  properties: {
    status_state: {
        type: "string",
        title: "Ready to hire?",
        enum: [
          "I'm ready to hire",
          "Planning & budgeting",
          "Quote for insurance",
        ]
      },
  }
}

const uiSchema = {
	status_state: {
    "ui:widget": "radio",
  }
}

const formData = {
  status_state: ''
}

const log = (type) => console.log.bind(console, type);

class WizardFormStatusPage extends React.Component {

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
      if (formData.status_state == '' || typeof formData.status_state == "undefined") {
        errors.status_state.addError("The field is required");
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

WizardFormStatusPage.propTypes = {
  previousPage  : PropTypes.func,
  nextPage      : PropTypes.func
}

export default WizardFormStatusPage;
