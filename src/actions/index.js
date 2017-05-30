import axios from 'axios';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const CATEGORY_SELECTED = 'CATEGORY_SELECTED';
export const FETCH_SAGA = 'FETCH_SAGA';
export const SUBMIT_EPISODE = 'SUBMIT_EPISODE';

export function categorySelected(category) {

    console.log('inside action: ', category);
    return {
        type: CATEGORY_SELECTED,
        payload: category,
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
    const url = '/api/jobSchema.json';
    const request = axios.get(url);

    return {
        type: FETCH_SAGA,
        payload: request,
    };
}

export function submitEpisode(episode) {
    const url = 'http://sampleapplicationte-env.eu-west-1.elasticbeanstalk.com/v1/categories?categoryType=Trade';
    const request = axios.post(url, episode);

    return {
        type: FETCH_SAGA,
        payload: request,
    };
}
