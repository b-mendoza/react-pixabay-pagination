import { types } from '../types/types';

export const pixabayReducer = (state = {}, action) => {
    switch (action.type) {
        case types.ADD_SEARCH:
            return { ...state, search: action.payload };
        case types.ADD_DATA_TO_PAGES:
            return {
                ...state,
                pages: { actualPage: 1, totalPages: action.payload },
            };
        case types.SUBTRACT_TO_ACTUAL_PAGE:
            return {
                ...state,
                pages: {
                    ...state.pages,
                    actualPage: state.pages.actualPage - 1,
                },
            };
        case types.ADD_TO_ACTUAL_PAGE:
            return {
                ...state,
                pages: {
                    ...state.pages,
                    actualPage: state.pages.actualPage + 1,
                },
            };

        case types.RESET_ACTUAL_PAGE:
            return {
                ...state,
                pages: {
                    ...state.pages,
                    actualPage: 1,
                },
            };

        default:
            return state;
    }
};
