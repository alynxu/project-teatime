import * as actionTypes from "./shopping-types";

export const addToCart = (itemID) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const adjustItemQty = (itemID, qty) => {
  return {
    type: actionTypes.ADJUST_ITEM_QTY,
    payload: {
      id: itemID,
      qty,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};

export const updateCart = (cartItems) => {
  return {
    type: actionTypes.UPDATE_CART,
    payload: cartItems,
  };
};

export const emptyCart = (cartItems) => {
  return {
    type: actionTypes.EMPTY_CART,
  };
};

export const addToFavorite = (itemID) => {
  return {
    type: actionTypes.ADD_TO_FAVORITE,
    payload: {
      id: itemID,
    },
  };
};

export const removeFromFavorite = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_FAVORITE,
    payload: {
      id: itemID,
    },
  };
};

export const updateFavorite = (favoriteItems) => {
  return {
    type: actionTypes.UPDATE_FAVORITE,
    payload: favoriteItems,
  };
};
