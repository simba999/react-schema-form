/* global $:true */

import React, {
  Component,
  PropTypes
}                           from 'react';
import Form                 from "react-jsonschema-form";

const schema = {
  title: "Deadline",
  type: "object",
  properties: {
    deadline_state: {
      type: "string",
      title: "When do you need your job completed?",
      enum: [
        "Urgently",
        "Within 2 weeks",
        "Within a week",
        "Flexible deadline",
      ]
    },
  }
}

const uiSchema = {
  firstName: {
      "ui:placeholder": "Enter name here...",
    },
    lastName: {
      "ui:placeholder": "Enter name here...",
    },
    email: {
      "ui:placeholder": "Enter email here...",
    },
    mobile: {
      "ui:placeholder": "Enter number here...",
    },
    address: {
      "ui:placeholder": "Enter code / house here...",
    }
}

const log = (type) => console.log.bind(console, type);

class WizardFormDetailPage extends React.Component {

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

WizardFormDetailPage.propTypes = {
  previousPage  : React.PropTypes.func,
  nextPage      : React.PropTypes.func
}

export default WizardFormDetailPage;
