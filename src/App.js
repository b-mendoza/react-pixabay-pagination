import React from 'react';

import PixabayContextProvider from './context/PixabayContext';
import Form from './components/Form';

const App = () => {
    return (
        <PixabayContextProvider>
            <div className="container">
                <div className="jumbotron">
                    <p className="lead text-center">Image Search</p>

                    <Form />
                </div>
            </div>
        </PixabayContextProvider>
    );
};

export default App;
