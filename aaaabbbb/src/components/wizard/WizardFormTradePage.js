/* global $:true */

import React, { Component }         from 'react';
import PropTypes                    from 'prop-types';
import Form                         from "react-jsonschema-form";
import { connect }                  from 'react-redux';

import {
    fetchSaga,
    saveSelectedSaga,
    getSelectedSaga
}                                   from '../../actions/index';

import  { bindActionCreators }      from 'redux';


const log = (type) => console.log.bind(console, type);

class WizardFormTradePage extends Component {

    constructor(props, context) {
        super(props, context);

        const { schema, uiSchema, validate } = this.props.schemaData;

        this.state = {
            form: false,
            formData: {},
            schema,
            uiSchema,
            validate,
            liveValidate: true,
            shareURL: null,
        };

    }

    componentWillMount() {

    }

    componentDidMount() {
        const { ArrayFieldTemplate } = this.props.schemaData;
        const { getSelectedSaga, currentPage} = this.props;

        this.setState({ ...this.props.schemaData, ArrayFieldTemplate });
        getSelectedSaga(currentPage);
    }

    componentWillUnmount() {
    }

    componentWillReceiveProps(nextProps, prevProps) {
        if (nextProps !== prevProps) {
            const {ArrayFieldTemplate} = nextProps.schemaData;
            if (Object.keys(nextProps.formData.sagaSelected.pagedata.formData).length > 0) {
                this.setState({
                    ...nextProps.schemaData,
                    form: true,
                    ArrayFieldTemplate,
                    formData: nextProps.formData.sagaSelected.pagedata.formData
                });
            }
            else {
                let resultFormData = {};

                nextProps.formData.sagaSelected.data.map((item) => {
                    resultFormData = item.formData;
                });

                this.setState({
                    ...nextProps.schemaData,
                    form: true, ArrayFieldTemplate,
                    formData: resultFormData
                });
            }
        }
    }


    onSubmit = (formData) => {
        const { saveSelectedSaga, currentPage, schemaData } = this.props;
        saveSelectedSaga(formData, currentPage, schemaData);
    }

    submitData = () => {
        console.log("Pressed form submitted");
    }


    render() {
        const {
            schema,
            uiSchema,
            formData,
            liveValidate,
            ArrayFieldTemplate,
            transformErrors,
        } = this.state;

        return (
            <div>
                <Form schema={schema}
                      uiSchema={uiSchema}
                      formData={formData}
                      onChange={log("changed")}
                      onSubmit={({formData}) => this.onSubmit(formData)}
                      validate={this.state.validate}
                      ArrayFieldTemplate={ArrayFieldTemplate}
                      liveValidate={liveValidate}
                      transformErrors={transformErrors}
                      onError={log("errors")} />
                {
                    typeof this.props.previousPage !== "undefined" ?
                        <button type="button" className="previous" onClick={ this.props.previousPage }>
                            Previous
                        </button>
                        :
                        ''
                }
                {
                    typeof this.props.nextPage !== "undefined" ?
                        <button type="button" className="next" onClick={ this.props.nextPage }>
                            next
                        </button>
                        :
                        <button type="submit" className="next" onClick={ () => this.submitData() }>
                            next
                        </button>
                }
            </div>
        );
    }

}

WizardFormTradePage.propTypes = {
    previousPage  : PropTypes.func,
    nextPage      : PropTypes.func,
    schemaData    : PropTypes.any,
    currentPage   : PropTypes.number,
};

function mapStateToProps(state) {
    return {
        formData: state
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            fetchSaga: (id) => dispatch(fetchSaga(id)),
            saveSelectedSaga: (formData, page, schemaData) => dispatch(saveSelectedSaga(formData, page, schemaData)),
            getSelectedSaga: (currentPage) => dispatch(getSelectedSaga(currentPage))
        },
        dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WizardFormTradePage);

