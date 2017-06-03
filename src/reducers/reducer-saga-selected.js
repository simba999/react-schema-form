import {CATEGORY_SELECTED}              from '../actions/index';
import {SAVE_SAGA}                      from '../actions/index';
import {GET_SELECTED_SAGA}              from '../actions/index';
import {Map, List, toJS, fromJS}              from 'immutable';

let initState = {
    data: [{
        currentPage: 0,
        data:{}
    }]    
}

// let initState = Map(data).toJS();

console.log('++++++++++++++++++++++', initState)

export default function(state = initState, action) {
    switch (action.type) {
        case SAVE_SAGA:

            let currentData = []
            currentData.push(state.data);
            console.log("SAVE_AAA: ", currentData);
            let isData = false, idx = 0
            console.log("SAVE_SELECTED_SAGA: ", state.data);

            currentData.map((item, index) => {
                if(item.currentPage == action.currentPage){
                    isData = true
                    idx = index
                }
            })

            if(isData == false) {
                currentData.push({
                    data: action.payload,
                    currentPage: action.currentPage
                })
            } else {
                currentData[idx].push({
                    data: action.payload,
                    currentPage: action.currentPage
                })
            }
         
            state.data = currentData;

        	return { ...state }

        case GET_SELECTED_SAGA:
            console.log("AAA: ", state.data);
            currentData = [];
            isData = false;

            currentData.push(state.data);
            if ( currentData.length == 1 ) {
                return { ...state };
            }
            
            state.data.forEach((d, index) => {
                if(d.currentPage == action.currentPage){
                    isData = true;
                    idx = index;
                }
            })

            if (isData == false) {
                return { ...state };
            } else {
                state.data = currentData[idx];

                return { ...state };
            }
    }
    return state;
}

// const initState = [{
//     filter: 'assa',
//     data: {},
//     currentPage: 1
// }];

// export default function(state = initState, action) {
//     switch (action.type) {
//         case SAVE_SAGA:
//             let isExisting = 0;
//             console.log("StateOne: ", state);
//             for (let item in state) {
//                 console.log("item in state: ", item);
//                 if (item['currentPage'] == action.currentPage) {
//                     item['data'] = action.payload;
//                     isExisting = 1;
//                     break;
//                 }
//             }
//             console.log("before checkin: ", state);
//             if (isExisting == 1) {
//                 return { ...state }
//             }
//             console.log("after checkin: ", state);
//             return state.push({
//                 data: action.payload,
//                 currentPage: action.currentPage
//             })
//         case GET_SELECTED_SAGA:
//             for (let item in state) {
//                 if (item['currentPage'] == action.currentPage) {
//                     return { ...item }
//                 }
//             }
//             return { ...state[0] }
//     }
//     return state;
// }