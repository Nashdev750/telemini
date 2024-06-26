// ShoppingCartContext.js
import React, { createContext, useReducer, useContext } from 'react';


const adderess = window.localStorage.getItem('shipping')
// Define initial state
const initialState = {
  items: [],
  shippingdetails:adderess?JSON.parse(adderess):undefined
};

// Define actions
const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const ADD_SHIPPING = 'ADD_SHIPPING';

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
    case ADD_SHIPPING:
         window.localStorage.setItem("shipping",JSON.stringify(action.payload))
         return {...state, shippingdetails: action.payload}
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
  const addShippingDetails = details => {
    dispatch({ type: ADD_SHIPPING, payload: details });
  };

  const removeItemFromCart = itemId => {
    dispatch({ type: REMOVE_ITEM, payload: itemId });
  };

  return (
    <ShoppingCartContext.Provider
      value={{ cart: state.items,details:state?.shippingdetails, addItemToCart, removeItemFromCart, addShippingDetails }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

// Custom hook to consume context
export const useShoppingCart = () => useContext(ShoppingCartContext);
