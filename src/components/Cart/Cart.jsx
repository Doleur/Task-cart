import React from 'react';
import { array, func, object } from 'prop-types';

import ProductCard from '../ProductCard';
import * as S from './styled';

const Cart = ({ productsData, dispatch, countsProducts }) => {
  const totalCost = (productsData, countsProducts) => {
    return productsData.reduce(
      (accumulator, currentValue) =>
        accumulator +
        currentValue.cost *
          (countsProducts[currentValue.id]
            ? countsProducts[currentValue.id]
            : 0),
      0
    );
  };
  const checkCart = () => {
    if (productsData.length)
      return (
        <S.Cart>
          {productsData.map((productCartData) => (
            <ProductCard
              key={`cart-${productCartData.id}`}
              productData={productCartData}
              isCart={true}
              dispatch={dispatch}
              count={countsProducts[productCartData.id]}
            />
          ))}
        </S.Cart>
      );
    return (
      <S.EmptyCart>
        <div>В корзине пусто</div>
      </S.EmptyCart>
    );
  };
  return (
    <S.CartWrapper>
      <h2>Корзина</h2>
      {checkCart()}
      <S.TotalCost>
        Итого: {totalCost(productsData, countsProducts).toFixed(2)} р.
      </S.TotalCost>
    </S.CartWrapper>
  );
};

Cart.propTypes = {
  productsData: array,
  dispatch: func,
  countsProducts: object
};

export default Cart;
