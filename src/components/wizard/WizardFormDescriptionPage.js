/* global $:true */

import React, {
  Component,
  PropTypes
}                           from 'react';
import Form 				from "react-jsonschema-form";

const schema = {
	title: "Description",
    description: "",
    type: "object",
    properties: {
      title: {
        type: "string",
        title: "job title",
      },
      description: {
        type: "string",
        title: "job description",
      },
    }
}

const uiSchema = {
	title: {
      "ui:autofocus": true,
    }
}

const log = (type) => console.log.bind(console, type);

class WizardFormDescriptionPage extends React.Component {

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
      if (formData.title == '' || typeof formData.title == "undefined") {
        errors.title.addError("The field is required");
      }
      if (formData.description == '' || typeof formData.description == "undefined") {
        errors.description.addError("The field is required");
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

WizardFormDescriptionPage.propTypes = {
  previousPage  : React.PropTypes.func,
  nextPage      : React.PropTypes.func
}

export default WizardFormDescriptionPage;
