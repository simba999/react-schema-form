import {combineReducers} from "redux";
import CategoriesReducer from "./reducer-categories";
import CategorySelectedReducer from "./reducer-category-selected";
import SagaReducer from "./reducer-saga";
import SagaSelectedReducer from "./reducer-saga-selected";

const rootReducer = combineReducers({
    categories: CategoriesReducer,
    categorySelected: CategorySelectedReducer,
    saga: SagaReducer,
    sagaSelected: SagaSelectedReducer,
});

export default rootReducer;
