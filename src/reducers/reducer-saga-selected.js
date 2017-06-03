import {CATEGORY_SELECTED}              from '../actions/index';
import {SAVE_SAGA}                      from '../actions/index';
import {GET_SELECTED_SAGA}              from '../actions/index';

let initState = {
    data: [{
        currentPage: 0,
        data:{
        }
    }]    
}

export default function(state = initState, action) {
    switch (action.type) {
        case SAVE_SAGA:
            let currentData = state.data;
            let isData = false, idx = 0

            currentData.map((item) => {
                if(item.currentPage == action.currentPage){
                    isData = true;
                    item['data'] = action.payload;
                    item['currentPage'] = action.currentPage;
                }
            })

            if(isData == false) {
                currentData.push({
                    data: action.payload,
                    currentPage: action.currentPage
                })
            }
         
            state.data = currentData;
        	return { ...state }

        case GET_SELECTED_SAGA:
            currentData = state.data;
            isData = false;
            currentData.map((item, index) => {
                if(item.currentPage == action.currentPage){
                    idx = index;
                    isData = true;
                }
            })

            if (isData == false) {
                state.data.push({
                    currentPage: action.currentPage,
                    data: {}
                })
                idx = state.data.length - 1;
            } 

            return {
                ...state,
                pagedata: state.data[idx]
            };

        default:
            return state;
    }
}