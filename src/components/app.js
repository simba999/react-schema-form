import React, {Component} 	from "react";
import SearchBar 			from "../containers/search-bar";
import CategoryList 		from "../containers/category-list";
import Episode 				from "../containers/episode";

export default class App extends Component {
    render() {
        return (
            <div>
                <SearchBar />
                <Episode />
            </div>
        );
    }
}
