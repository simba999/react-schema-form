/* global $:true */

import React, {
  Component
}                         from 'react';
import PropTypes          from 'prop-types';
import Form               from "react-jsonschema-form";

const schema = {
  title: "Verify Mobile",
  description: "",
  type: "object",
  properties: {
    code: {
      type: "string",
      title: "Code",
    },
  }
}

const uiSchema = {
  code: {
    "ui:placeholder": "Enter code here...",
  }
}

const log = (type) => console.log.bind(console, type);

class WizardFormVerifyMobilePage extends React.Component {

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

WizardFormVerifyMobilePage.propTypes = {
  previousPage  : PropTypes.func,
  nextPage      : PropTypes.func
}

export default WizardFormVerifyMobilePage;
