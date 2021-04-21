// import React from 'react';

import { productsData } from '../constants/productsData';
import reducer from './reducer';

const initialState = {
  cart: [],
  countsProducts: {}
};

test('add product to cart', () => {
  let action = { type: 'ADD_PRODUCT_TO_CART', productData: productsData[0] };
  const newState = reducer(initialState, action);

  expect(newState.cart.length).toBe(1);
});

test('the added product must not repeat', () => {
  let action = { type: 'ADD_PRODUCT_TO_CART', productData: productsData[0] };
  let newState = reducer(initialState, action);
  newState = reducer(newState, action);

  let check = newState.cart.filter(
    (element) => element.id === productsData[0].id
  );
  expect(check.length).toBe(1);
});
