import {CATEGORY_SELECTED} from '../actions/index';
import {FETCH_SAGA} from '../actions/index';

const initState = {
	filter: '',
	data: '',
    currentPage: 1
};

export default function(state = initState, action) {
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
