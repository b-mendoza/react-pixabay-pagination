import React, { useContext, useState } from 'react';

import { PixabayContext } from '../context/PixabayContext';
import { addSearch } from '../actions/actions';
import { isValid } from '../helpers/isValid';
import { useForm } from '../hooks/useForm';

const Form = () => {
    const [error, setError] = useState(false);
    const { dispatch } = useContext(PixabayContext);

    const [formValues, handleChange] = useForm({ search: '' });
    const { search } = formValues;

    const handleSubmit = event => {
        event.preventDefault();

        if (!isValid(search.trim())) {
            setError(true);

            return;
        } else setError(false);

        dispatch(addSearch(search));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        className={
                            error
                                ? 'form-control form-control-lg is-invalid'
                                : 'form-control form-control-lg'
                        }
                        type="text"
                        name="search"
                        placeholder="Search for images. e.g., soccer, science"
                        value={search}
                        onChange={handleChange}
                    />
                    {error && (
                        <div className="invalid-feedback">
                            This field cannot be empty
                        </div>
                    )}
                </div>

                <div className="form-group col-md-4">
                    <button
                        className="btn btn-lg btn-danger btn-block"
                        type="submit"
                    >
                        Search
                    </button>
                </div>
            </div>
        </form>
    );
};

export default Form;
