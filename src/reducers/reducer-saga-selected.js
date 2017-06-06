import { CATEGORY_SELECTED, SAVE_SAGA, GET_SELECTED_SAGA }  from '../actions/index';

let initState = {
    data: [{
        page: 0,
        formData:{},
        schema: {},
        uiSchema: {},
        title: '',
    }]    
}

export default function(state = initState, action) {
    switch (action.type) {
        case SAVE_SAGA:
            let currentData = state.data;
            let isData = false, idx = 0

            currentData.map((item) => {
                if(item.page == action.currentPage){
                    isData = true;
                    item['formData'] = action.payload;
                    item['page'] = action.currentPage;
                    item['schema'] = action.schemaData.schema;
                    item['uiSchema'] = action.schemaData.uiSchema;
                    item['title'] = action.schemaData.title;
                }
            })

            if(isData == false) {
                currentData.push({
                    formData: action.payload,
                    page: action.currentPage,
                    schema: action.schemaData.schema,
                    uiSchema: action.schemaData.uiSchema
                })
            }
         
            state.data = currentData;
        	return { ...state }

        case GET_SELECTED_SAGA:
            currentData = state.data;
            isData = false;
            currentData.map((item, index) => {
                if(item.page == action.currentPage){
                    idx = index;
                    isData = true;
                }
            })

            if (isData == false) {
                state.data.push({
                    page: action.currentPage,
                    formData: {},
                    schema: {},
                    uiSchema: {}
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