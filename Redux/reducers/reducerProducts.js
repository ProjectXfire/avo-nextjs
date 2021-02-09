import {
  SET_PRODUCTS,
  SET_PRODCUT_IN_CART
} from '../types/typeProducts';

const initialState = {
  products: [],
  cart: []
};

const reducerProducts = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }
    default:
      return {
        ...state
      };
  }
};

export {
  initialState,
  reducerProducts
};