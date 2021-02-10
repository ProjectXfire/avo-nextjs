import {
  SET_PRODUCTS,
  SET_PRODUCT_IN_CART,
  ADD_TO_CART_OR_UPDATE_QTTY,
  REMOVE_FROM_CART
} from '../types/typeProducts';

const setProducts = (payload) => ({
  type: SET_PRODUCTS,
  payload,
});

const addToCart = (payload) => ({
  type: SET_PRODUCT_IN_CART,
  payload,
});

const addTocartOrUpdateQtty = (payload) => ({
  type: ADD_TO_CART_OR_UPDATE_QTTY,
  payload,
});

const removeItemFromCart = (payload) => ({
  type: REMOVE_FROM_CART,
  payload,
});

export {
  setProducts,
  addToCart,
  addTocartOrUpdateQtty,
  removeItemFromCart
}