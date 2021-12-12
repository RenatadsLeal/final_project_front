import Swal from 'sweetalert2';

export const basketReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            const checkIfProductAlreadyExists = state.filter(({ product }) => (
                product.id === action.payload.product.id

            ));
            if (!checkIfProductAlreadyExists.length) {
                Swal.fire({
                    text: 'Produto colocado na cesta',
                    confirmButtonColor: '#000000',
                    imageUrl: 'https://cdn-icons-png.flaticon.com/512/3014/3014466.png',
                    imageWidth: 100,
                    width: 280,
                    height: 150,
                    imageAlt: 'bread',
                })
                return [...state, action.payload];

            }
            return state;
        case 'DELETE_PRODUCT':
            return state.filter(({product}) => (
                product.id !== action.payload.product.id
            ));
        default:
            return state;
    }
}