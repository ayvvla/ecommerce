"use client"
import { createContext, useReducer } from "react";
import data from "./data";

const product = data.products
export const Store = createContext();

const initialState = {
  product: product,
  cart: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "CART_ADD_ITEM":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload,  }],
      };

    case "CART_REMOVE_ITEM":
      const newCart = state.cart.filter((c) => c.slug !== action.payload.slug);
      return {
        ...state,
        cart: newCart,
      };

    case "CHANGE_QTY":
      return {
        ...state,
        product: state.product.filter((c) => c.slug === action.payload.slug ? (c.qty = action.payload.qty) : c.qty )
      }

    case "CHANGE_CART_QTY":
      return {
        ...state,
        product: state.cart.filter((c) => c.slug === action.payload.slug ? (c.qty = action.payload.qty) : c.qty )
      }
    default:
      return state;
  }
}

export function StoreProvider({children}) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addToCart = (product) => {
    dispatch({
      type: 'CART_ADD_ITEM',
      payload: product
    })
  }

  const removeFromCart = (cart) => {
    dispatch({
      type: "CART_REMOVE_ITEM",
      payload: cart
    })
  }

  const changeCartQty = (e, product) => {
    dispatch({
      type: "CHANGE_QTY",
      payload: {
        slug : product.slug,
        qty: e.target.value
      }
    })
  }


  return <Store.Provider value={{state, addToCart, removeFromCart, changeCartQty, }}>{children}</Store.Provider>
}
