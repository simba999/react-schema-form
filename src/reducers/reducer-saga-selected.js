import {CATEGORY_SELECTED}              from '../actions/index';
import {SAVE_SAGA}                      from '../actions/index';
import {GET_SELECTED_SAGA}              from '../actions/index';

const initState = {
	filter: '',
	data: '',
    currentPage: 1
};

export default function(state = initState, action) {
    switch (action.type) {
        case SAVE_SAGA:
        	return Object.assign({}, state, {
                data: action.payload,
                currentPage: action.currentPage
            })
        case GET_SELECTED_SAGA:
            return { ...state }
    }
    return state;
}