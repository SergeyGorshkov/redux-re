const booksRequested = () => {
    return {
        type: 'FETCH_BOOK_REQUEST'
    };
};

const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOK_SUCCESS',
        payload: newBooks
    };
};

const booksError = (error) => {
    return {
        type: 'FETCH_BOOK_FAILURE',
        payload: error
    }
};

export const bookAddedToCart = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    }
};

export const allBookRemovedFromCart = (bookId) => {
    return {
        type: 'ALL_BOOK_REMOVED_FROM_CART',
        payload: bookId
    }
};

export const bookRemovedFromCart = (bookId) => {
    return {
        type: 'BOOK_REMOVED_FROM_CART',
        payload: bookId
    }
};

const fetchBooksOld = (bookstoreService, dispatch) => () => {
    dispatch(booksRequested());
    bookstoreService.getBooks()
      .then((data) => dispatch(booksLoaded(data)))
      .catch((err) => dispatch(booksError(err)));
};

const fetchBooks = (bookstoreService) => () => (dispatch) => {
    dispatch(booksRequested());
    bookstoreService.getBooks()
      .then((data) => dispatch(booksLoaded(data)))
      .catch((err) => dispatch(booksError(err)));
}
  
  export {
    fetchBooks
  }; 