// ShoppingCartContext.js
import React, { createContext, useReducer, useContext } from 'react';

// Define initial state
const initialState = {
  items: [],
};

// Define actions
const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';

// Define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      // Check if the item already exists in the cart
      const existingItemIndex = state.items.findIndex(item => item._id === action.payload._id);
      if (existingItemIndex !== -1) {
        // If the item exists, increment its count
        const updatedItems = state.items.map((item, index) => {
          if (index === existingItemIndex) {
            return { ...item, count: item.count + 1 };
          }
          return item;
        });
        return {
          ...state,
          items: updatedItems,
        };
      } else {
        // If the item doesn't exist, add it with count 1
        return {
          ...state,
          items: [...state.items, { ...action.payload, count: 1 }],
        };
      }
    case REMOVE_ITEM:
      const items = state.items.map(item => {
          if (item._id === action.payload) {
              return { ...item, count: item.count - 1 };
          }
          return item;
        })
        const newitems = items.filter(itm=>itm.count>0)
        return {...state, items: newitems}
    default:
      return state;
  }
};


// Create context
const ShoppingCartContext = createContext();

// Create context provider
export const ShoppingCartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItemToCart = item => {
    dispatch({ type: ADD_ITEM, payload: item });
  };

  const removeItemFromCart = itemId => {
    dispatch({ type: REMOVE_ITEM, payload: itemId });
  };

  return (
    <ShoppingCartContext.Provider
      value={{ cart: state.items, addItemToCart, removeItemFromCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

// Custom hook to consume context
export const useShoppingCart = () => useContext(ShoppingCartContext);
