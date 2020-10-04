import { types } from '../types/types';

export const addSearch = search => ({
    type: types.ADD_SEARCH,
    payload: search,
});

export const addDataToPages = totalPages => ({
    type: types.ADD_DATA_TO_PAGES,
    payload: totalPages,
});

export const subtractToActualPage = () => ({
    type: types.SUBTRACT_TO_ACTUAL_PAGE,
});

export const addToActualPage = () => ({
    type: types.ADD_TO_ACTUAL_PAGE,
});

export const resetActualPage = () => ({ type: types.RESET_ACTUAL_PAGE });
