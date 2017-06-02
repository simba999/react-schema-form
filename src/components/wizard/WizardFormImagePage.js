/* global $:true */

import React, {
  Component
}                   			from 'react';
import PropTypes 				from 'prop-types';
import Form 					from "react-jsonschema-form";

const schema = {
	title: "Image",
    type: "object",
    properties: {
      fileType: {
        type: "string",
        // format: "data-url",
      },
    }
}

const uiSchema = {
	fileType: {
      "ui:widget": "file",
    }
}

const log = (type) => console.log.bind(console, type);

class WizardFormImagePage extends React.Component {

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

WizardFormImagePage.propTypes = {
  previousPage  : PropTypes.func,
  nextPage      : PropTypes.func
}

export default WizardFormImagePage;
