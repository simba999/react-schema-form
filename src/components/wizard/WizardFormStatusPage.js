/* global $:true */

import React, {
  Component,
  PropTypes
}                           from 'react';
import Form                 from "react-jsonschema-form";

const schema = {
	title: "Status",
  type: "object",
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

WizardFormStatusPage.propTypes = {
  previousPage  : React.PropTypes.func,
  nextPage      : React.PropTypes.func
}

export default WizardFormStatusPage;
