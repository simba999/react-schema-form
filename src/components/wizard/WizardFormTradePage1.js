/* global $:true */

import React, {
  Component
}                         from 'react';
import PropTypes          from 'prop-types';
import Form               from "../../form";

const schema = {
  title: "Trade",
  type: "object",
  // required: ["tradeSlugs", "skillSlugs"],
  properties: {
    tradeSlugs: {
      type: "string",
      title: "Choose any trade",
    },
    skillSlugs: {
      type: "string",
      title: "Choose any skill",
    },
  }
}

const uiSchema = {
  tradeSlugs: {
    "ui:placeholder": "Enter a trade"
  },
  skillSlugs: {
    "ui:placeholder": "Enter a skill"
  }
}

const formData = {
  tradeSlugs: "",
  skillSlugs: ""
}

const log = (type) => console.log.bind(console, type);

class WizardFormTradePage1 extends React.Component {

  constructor(props, context) {
    super(props, context);

    const { schema, uiSchema, formData, validate } = this.props.schemaData;

    this.state = {
      form: true,
      schema,
      uiSchema,
      formData,
      validate,
      liveValidate: true,
      shareURL: null,
    };
  }

  componentDidMount() {
    // window.addEventListener('scroll', this.handleWindowScroll);
    const { ArrayFieldTemplate } = this.props.schemaData;
    this.setState({ form: false }, _ =>
      this.setState({ ...this.props.schemaData, form: true, ArrayFieldTemplate })
    );
    this.
  }

  componentWillUnmount() {
    // window.removeEventListener('scroll', this.handleWindowScroll);
  }


  render() {
    const {
      schema,
      uiSchema,
      formData,
      liveValidate,
      validate,
      ArrayFieldTemplate,
      transformErrors,
    } = this.state;

    return (
      <div>
          <Form schema={schema}
                uiSchema={uiSchema}
                onChange={log("changed")}
                onSubmit={({ formData }) =>
                  console.log("submitted formData", formData)}
                validate={validate}
                ArrayFieldTemplate={ArrayFieldTemplate}
                liveValidate={liveValidate}
                transformErrors={transformErrors}
                onError={log("errors")} />
          <button type="button" className="previous" onClick={ this.props.previousPage }>
              Previous
          </button>
          <button type="submit" className="next" onClick={ this.props.nextPage }>Next</button>
      </div>
    );
  }

}

WizardFormTradePage1.propTypes = {
  previousPage  : PropTypes.func,
  nextPage      : PropTypes.func,
  schemaData    : PropTypes.any,
}

export default WizardFormTradePage1;
