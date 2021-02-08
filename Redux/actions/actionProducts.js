import {
  SET_PRODUCTS,
  SET_PRODCUT_IN_CART
} from '../types/typeProducts';

const setProducts = (payload) => ({
  type: SET_PRODUCTS,
  payload
});

export {
  setProducts
}