import { types } from '../types/types';

export const pixabayReducer = (state = {}, action) => {
    switch (action.type) {
        case types.ADD_SEARCH:
            return { ...state, search: action.payload };

        default:
            return state;
    }
};
