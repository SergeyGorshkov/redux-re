const updateBookList = (state, { type, payload }) => {
    if(state === undefined) {
        return {
            books: [],
            loading: true,
            error: null
        }
    }
    switch (type) {
        case 'FETCH_BOOK_REQUEST':
            return {
                books: [],
                loading: true,
                error: null
            };
        case 'FETCH_BOOK_SUCCESS':
            return {
                books: payload,
                loading: false,
                error: null 
            };
        case 'FETCH_BOOK_FAILURE':
            return {
                books: [],
                loading: false,
                error: payload
            };
        default:
            return state.bookList;
    }
};

export default updateBookList;