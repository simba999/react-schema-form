/* global $:true */

import React, {
  Component,
  PropTypes
}                                 from 'react';
import Form from "react-jsonschema-form";

const schema = {
	title: "Contact Detail",
  type: "object",
  properties: {
    firstName: {
      type: "string",
      title: "Your First Name",
    },
    lastName: {
      type: "string",
      title: "Your Last Name",
    },
    email: {
      type: "string",
      title: "Your email",
    },
    mobile: {
      type: "string",
      title: "Your mobile number",
    },
    address: {
      type: "string",
      title: "Your address",
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

class WizardFormContactDetailPage extends React.Component {

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

WizardFormContactDetailPage.propTypes = {
  previousPage  : React.PropTypes.func,
  nextPage      : React.PropTypes.func
}

export default WizardFormContactDetailPage;
