export const basketReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            const checkIfProductAlreadyExists = state.filter(({product}) => (
                product.id === action.payload.product.id
            ));
            if (!checkIfProductAlreadyExists.length) {
                return [...state, action.payload];
            }
            return state;
        default:
            return state;
    }
}