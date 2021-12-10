import { createContext, useReducer, useEffect } from 'react';
import { basketReducer } from '../reducers/basketReducer';


export const BasketContext = createContext();

const BasketContextProvider = ({ children }) => {
  const [products, dispatch] = useReducer(basketReducer, [], () => {
    const localData = localStorage.getItem('products');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const addProduct = (product) => dispatch({ type: 'ADD_PRODUCT', payload: product });

  return (
    <BasketContext.Provider value={{ products, addProduct }}>
      {children}
    </BasketContext.Provider>
  )
}

export default BasketContextProvider;