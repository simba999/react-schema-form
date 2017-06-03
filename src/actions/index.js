import axios from 'axios';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const CATEGORY_SELECTED = 'CATEGORY_SELECTED';
export const FETCH_SAGA = 'FETCH_SAGA';
export const SAVE_SAGA = 'SAVE_SAGA';
export const GET_SELECTED_SAGA = 'GET_SELECTED_SAGA';
export const SUBMIT_EPISODE = 'SUBMIT_EPISODE';

export function categorySelected(category) {
    return {
        type: CATEGORY_SELECTED,
        payload: category,
    };
}

export function getSelectedSaga(currentPage) {
    return {
        type: GET_SELECTED_SAGA,
        currentPage: currentPage
    };
}

export function saveSelectedSaga(formData, currentPage) {
    return {
        type: SAVE_SAGA,
        payload: formData,
        currentPage: currentPage
    };
}

export function fetchSelectedSaga(saga) {

    return {
        type: FETCH_SAGA,
        payload: saga,
    };
}


export function fetchCategories(term) {
    const url = '/api/categories.json';
    const request = axios.get(url);

    return {
        type: FETCH_CATEGORIES,
        payload: request,
    };
}

export function fetchSaga(id) {
    const url = '/api/saga.json';
    
    return axios.get(url)
        .then(response => {
            return response.data;
        })
        .then(json => {
            return fetchSelectedSaga(json);
        });
}

export function submitEpisode(episode) {
    const url = 'http://sampleapplicationte-env.eu-west-1.elasticbeanstalk.com/v1/categories?categoryType=Trade';
    const request = axios.post(url, episode);

    return {
        type: FETCH_SAGA,
        payload: request,
    };
}
