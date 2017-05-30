import {CATEGORY_SELECTED} from '../actions/index';

export default function(state = null, action) {
    switch (action.type) {
        case CATEGORY_SELECTED:
            return action.payload;
    }
    return state;
}
