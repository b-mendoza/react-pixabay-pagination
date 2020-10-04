const API_KEY = process.env.REACT_APP_API_KEY;
const IMAGES_PER_PAGE = 30;

export const fetchData = async (searchQuery, actualPage = 1) => {
    const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&per_page=${IMAGES_PER_PAGE}&page${actualPage}`;

    const response = await fetch(URL);

    const body = await response.json();
    const { hits, totalHits } = body;

    return { hits, totalPages: Math.ceil(totalHits / IMAGES_PER_PAGE) };
};
