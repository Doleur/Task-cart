import React, { useState } from 'react';
import { array, func } from 'prop-types';

import ProductCard from '../ProductCard';
import * as S from './styled';

const Cart = ({
  productsCartData,
  updateProductsCartData,
  checkIsProductInCart
}) => {
  const [productCost, updateProductCost] = useState([]);

  const totalCost = () => {
    return productCost.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.cost * currentValue.count,
      0
    );
  };

  const checkCart = () => {
    if (productsCartData.length)
      return (
        <S.Cart>
          {productsCartData.map((productCartData, index) => (
            <ProductCard
              key={`cart-${productCartData.id}`}
              productData={productCartData}
              updateProductsCartData={updateProductsCartData}
              isCart={true}
              checkIsProductInCart={checkIsProductInCart}
              index={index}
              updateProductCost={updateProductCost}
            />
          ))}
          <S.TotalCost>Итого: {totalCost().toFixed(2)} р.</S.TotalCost>
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
    </S.CartWrapper>
  );
};

Cart.propTypes = {
  productsCartData: array,
  updateProductsCartData: func,
  checkIsProductInCart: func
};

export default Cart;
