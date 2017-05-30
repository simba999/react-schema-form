import {combineReducers} from "redux";
import CategoriesReducer from "./reducer-categories";
import CategorySelectedReducer from "./reducer-category-selected";
import SagaReducer from "./reducer-saga";

const rootReducer = combineReducers({
    categories: CategoriesReducer,
    categorySelected: CategorySelectedReducer,
    saga: SagaReducer
});

export default rootReducer;
