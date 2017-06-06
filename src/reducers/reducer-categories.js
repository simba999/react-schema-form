import {FETCH_CATEGORIES} from '../actions/index';

export default function(state = [], action) {
	// console.log("category Reducer:  ", action.type, "  ::::  ", action)
    switch (action.type) {
        case FETCH_CATEGORIES:
            return action.payload.data
    }
    return state;
}
