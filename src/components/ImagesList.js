import React, { useContext, useEffect } from 'react';

import PixabayContext from '../context/PixabayContext';
import {
    addDataToPages,
    subtractToActualPage,
    addToActualPage,
} from '../actions/actions';
import { useImages } from '../hooks/useImages';
import Image from './Image';

const ImagesList = ({ jumbotronRef }) => {
    const { data, dispatch } = useContext(PixabayContext);
    const { search, pages } = data;

    const { hits, totalPages } = useImages(search, pages?.actualPage);

    useEffect(() => {
        dispatch(addDataToPages(totalPages));
    }, [dispatch, totalPages]);

    const handleBack = () => {
        if (pages.actualPage !== 1) {
            dispatch(subtractToActualPage());

            jumbotronRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleNext = () => {
        if (pages.actualPage < pages.totalPages) {
            dispatch(addToActualPage());

            jumbotronRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="container">
            <div className="card-columns">
                {hits.map(image => (
                    <Image key={image.id} {...image} />
                ))}
            </div>

            <div className="d-flex justify-content-center align-items-center my-3">
                <button
                    className="btn btn-info w-25 mr-5"
                    type="button"
                    disabled={pages?.actualPage === 1 && true}
                    onClick={handleBack}
                >
                    Back
                </button>
                <button
                    className="btn btn-info w-25"
                    type="button"
                    disabled={pages?.actualPage === pages?.totalPages && true}
                    onClick={handleNext}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ImagesList;
