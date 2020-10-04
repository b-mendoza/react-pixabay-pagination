import React, { createContext, useReducer } from 'react';

import { pixabayReducer } from '../reducer/pixabayReducer';

export const PixabayContext = createContext();

const init = () => ({});

const PixabayContextProvider = ({ children }) => {
    const [data, dispatch] = useReducer(pixabayReducer, {}, init);

    return (
        <PixabayContext.Provider value={{ data, dispatch }}>
            {children}
        </PixabayContext.Provider>
    );
};

export default PixabayContextProvider;
