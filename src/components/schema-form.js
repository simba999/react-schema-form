import React, {Component} 	from "react";
import SearchBar 			from "../containers/search-bar";
import Episode 				from "../containers/episode";

export default class SchemaForm extends Component {
    render() {
        return (
            <div>
                <SearchBar />
                <Episode />
            </div>

        );
    }
}
