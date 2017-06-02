/* global $:true */

import React, {
  Component
}                             from 'react';
import PropTypes              from 'prop-types';
import Form                   from "react-jsonschema-form";

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

    const validate = (formData, errors) => {
      if (formData.firstName == '' || typeof formData.firstName == "undefined") {
        errors.firstName.addError("The field is required");
      }

      if (formData.lastName == '' || typeof formData.lastName == "undefined") {
        errors.lastName.addError("The field is required");
      }

      if (formData.email == '' || typeof formData.email == "undefined") {
        errors.email.addError("The field is required");
      }

      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
        errors.email.addError("Invalid Email");
      }

      if (formData.mobile == '' || typeof formData.mobile == "undefined") {
        errors.mobile.addError("The field is required");
      }

      if (formData.mobile.length < 10 || typeof formData.mobile.length > 10 || /^[1-9]{1}[0-9]{9}$/.test(formData.mobile)) {
        errors.mobile.addError("The field is required");
      }

      if (formData.address == '' || typeof formData.address == "undefined") {
        errors.address.addError("The field is required");
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

WizardFormContactDetailPage.propTypes = {
  previousPage  : PropTypes.func,
  nextPage      : PropTypes.func
}

export default WizardFormContactDetailPage;
