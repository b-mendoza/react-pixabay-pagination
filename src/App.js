import React, { useReducer, useRef } from 'react';

import PixabayContext from './context/PixabayContext';
import { pixabayReducer } from './reducer/pixabayReducer';

import Form from './components/Form';
import ImagesList from './components/ImagesList';

const init = () => ({});

const App = () => {
    const [data, dispatch] = useReducer(pixabayReducer, {}, init);
    const jumbotron = useRef(null);

    return (
        <PixabayContext.Provider value={{ data, dispatch }}>
            <div className="container">
                <div className="jumbotron" ref={jumbotron}>
                    <p className="lead text-center">Image Search</p>

                    <Form />
                </div>

                <hr />

                <div className="row justify-content-center">
                    {Object.keys(data).length !== 0 && (
                        <ImagesList jumbotronRef={jumbotron} />
                    )}
                </div>
            </div>
        </PixabayContext.Provider>
    );
};

export default App;
