import { useEffect, useState } from 'react';
import { fetchData } from '../helpers/fetchData';

export const useImages = (searchQuery, actualPage) => {
    const [data, setData] = useState({
        hits: [],
        totalPages: 1,
    });

    useEffect(() => {
        fetchData(searchQuery, actualPage).then(response =>
            setData({
                hits: response.hits,
                totalPages: response.totalPages,
            })
        );
    }, [searchQuery, actualPage]);

    return data;
};
