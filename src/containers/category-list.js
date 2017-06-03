import React, {Component}       from "react";
import {connect}                from "react-redux";
import {categorySelected}       from "../actions/index";
import {bindActionCreators}     from "redux";

class CategoryList extends Component {

    constructor(props) {
        super(props);
        this.onCategorySelect = this.onCategorySelect.bind(this);
        this.renderCategory = this.renderCategory.bind(this);
    }

    renderCategory(category) {


        return (
            <tr key={category.id} onClick={() => this.onCategorySelect(category)}>
                <td>{category.type}</td>
                <td>{category.slug}</td>
                <td>{category.alias}</td>
            </tr>
        );
    }

    render() {
        if (this.props.categories === []) {
            return (
                <div> Loading... </div>);
        }

        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>Type</th>
                    <th>Slug</th>
                    <th>Alias</th>
                </tr>
                </thead>
                <tbody>
                {this.props.categories.map(this.renderCategory)}
                </tbody>
            </table>
        );
    }

    onCategorySelect(category) {
        this.props.categorySelected(category);
    }
}

function mapStateToProps({categories}) {
    return {categories};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({categorySelected}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);



