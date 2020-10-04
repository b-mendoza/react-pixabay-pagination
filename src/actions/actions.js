import { types } from '../types/types';

export const addSearch = search => ({
    type: types.ADD_SEARCH,
    payload: search,
});
