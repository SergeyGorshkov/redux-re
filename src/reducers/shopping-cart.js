const updateCartItems = (cartItems, item, idx) => {
    if (item.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)];
    }
    
    if (idx === -1) {
        return [...cartItems, item];
    }
        
    return cartItems.map((el, i) => idx === i ? item : el);
}

const updateCartItem = (book, item = {}, quantity) => {
    const { 
        id = book.id, 
        title = book.title, 
        count = 0, 
        total = 0 } = item;
    
    return {
        id,
        title,
        count: count + quantity,
        total: total + quantity * book.price
    }
}

const updateOrder = (state, bookId, quantity) => {
    const { bookList: { books }, shoppingCart: { cartItems } } = state;
    const book = books.find(book => book.id === bookId);
    const itemIndex = cartItems.findIndex(({id}) => id === bookId);
    const item = cartItems[itemIndex];
    const newItem = updateCartItem(book, item, quantity);
    return {
        orderTotal: 0,
        cartItems: updateCartItems(cartItems, newItem, itemIndex)
    };
}


const updateShoppingCart = (state, { type, payload }) => {
    if(state === undefined) {
        return {
            cartItems: [],
            orderTotal: 0
        }
    }
    switch (type) {
        case 'BOOK_ADDED_TO_CART':
            return updateOrder(state, payload, 1);
        case 'BOOK_REMOVED_FROM_CART':
            return updateOrder(state, payload, -1);            
        case 'ALL_BOOK_REMOVED_FROM_CART':
            const item = state.shoppingCart.cartItems.find(({id}) => id === payload);
            return updateOrder(state, payload, -item.count);
        default:
            return state.shoppingCart;
    }
};

export default updateShoppingCart;