import {CATEGORY_SELECTED}              from '../actions/index';
import {SAVE_SAGA}                      from '../actions/index';
import {GET_SELECTED_SAGA}              from '../actions/index';
import {Map, toJS, fromJS}              from 'immutable';

const initState = Map({
	filter: 'assa',
	data: {},
    currentPage: 1
}).toJS();

export default function(state = initState, action) {
    switch (action.type) {
        case SAVE_SAGA:
        	return Map(state).merge({
                data: action.payload,
                currentPage: action.currentPage
            }).toJS()
        case GET_SELECTED_SAGA:
            return { ...state }
    }
    return state;
}