import {CATEGORY_SELECTED} from '../actions/index';
import {FETCH_SAGA} from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case CATEGORY_SELECTED:
            return {
                ...state,
                data: action.payload
            }

        case FETCH_SAGA:
        	return {
                ...state,
        		schemaData: action.payload
        	}
    }
    return state;
}
