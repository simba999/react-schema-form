import {CATEGORY_SELECTED} from '../actions/index';

export default function(state = null, action) {
	// console.log("category selected Reducer:  ", action.type, "  ::::  ", action)
    switch (action.type) {
        case CATEGORY_SELECTED:
            return action.payload;
    }
    return state;
}
