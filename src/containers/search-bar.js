import React, {Component}               from "react";
import {connect}                        from "react-redux";
import {bindActionCreators}             from "redux";
import {fetchCategories, sagaForm}                from "../actions/index";
import { Typeahead }                    from 'react-bootstrap-typeahead';
import jQuery                           from 'jquery';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
            options: [{
                id: 1,
                alias: 'abc alias'
            }]
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.submitCategory = this.submitCategory.bind(this);
        this._handleChange = this._handleChange.bind(this);
    }

    componentDidMount() {
        const { fetchCategories } = this.props;
        fetchCategories('');

        jQuery("[name='searchText']").keydown(function(e) {
            if (e.keyCode === 13) {
                jQuery("#searchTextBtn").click();
            }
        });
    }

    componentWillReceiveProps(nextProps, prevProps) {
        if (nextProps !== prevProps) {
            this.setState({ options: nextProps.categories });
        }
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.fetchCategories(this.state.term);
        this.setState({term: ''});
    }

    submitCategory() {
        event.preventDefault();

        const { sagaForm } = this.props;

        let acc = document.getElementsByName('searchText')[0].value;
        if (acc !== "") {
            sagaForm();
        } else {
            alert('Please select the category!')
        }     
    }

    _handleChange(e) {
        document.getElementsByName('searchText')[0].value = e[0].alias;
        jQuery("#searchTextBtn").click();
    }

    render() {
        return (
            <section className="search-section">
                <form onSubmit={(e) => this.submitCategory(e)}>
                 <div className="form-group">
                    <Typeahead
                        clearButton
                        align="justify"
                        labelKey="alias"
                        name="searchText"
                        className=""
                        onChange={this._handleChange}
                        options={this.props.categories.categories}
                    />
                    <div>
                        <button id="searchTextBtn" type="button" onClick={() => this.submitCategory()}>Submit</button>
                    </div>
                </div>
                </form>
            </section>
        );
    }
}

function mapStateToProps(state) {
    return { categories: state }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchCategories: () => dispatch(fetchCategories()),
        sagaForm: () => dispatch(sagaForm())
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
