import {
  SET_PRODUCTS,
  SET_PRODUCT_IN_CART,
  ADD_TO_CART_OR_UPDATE_QTTY
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
    case SET_PRODUCT_IN_CART: {
      const alreadyAdded = state.cart.find(product => product.id === action.payload.id);
      if (!alreadyAdded) {
        return {
          ...state,
          cart: [...state.cart, action.payload]
        }
      } else {
        alert('Product already added');
        return state;
      };
    }
    case ADD_TO_CART_OR_UPDATE_QTTY: {
      const alreadyAdded = state.cart.find(product => product.id === action.payload.id);
      if (!alreadyAdded) {
        return {
          ...state,
          cart: [...state.cart, action.payload]
        }
      } else {
        const update = state.cart.map(cart => { return {...cart} })
        update.find(product => product.id === action.payload.id).qtty = action.payload.qtty
        return {
          ...state,
          cart: update
        }
      }
    }

    default:
      return state;
  };
};

export {
  initialState,
  reducerProducts
};