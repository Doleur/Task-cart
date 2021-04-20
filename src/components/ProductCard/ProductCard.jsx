import React, { useEffect, useState } from 'react';
import { array, bool, func, number, shape, string } from 'prop-types';

import ButtonBuy from '../ButtonBuy';
import ButtonCountChange from '../ButtonCountChange';
import * as S from './styled';

const ProductCard = ({
  productData,
  productsCartData,
  updateProductsCartData,
  isCart,
  checkIsProductInCart,
  index,
  updateProductCost
}) => {
  const [productCount, updateProductCount] = useState(1);

  useEffect(() => {
    if (!isCart) return;
    updateProductCost((prev) => {
      let indexProduct = prev.findIndex(
        (product) => product.id === productData.id
      );

      if (indexProduct > -1) {
        prev[indexProduct].count = productCount;
        return [...prev];
      } else {
        return [
          ...prev,
          { id: productData.id, count: productCount, cost: productData.cost }
        ];
      }
    });
  }, [productCount]);
  return (
    <S.ProductCardWrapper>
      <S.ProductCardContent>
        <S.Name>{productData.name}</S.Name>
        <S.Description>{productData.description}</S.Description>
      </S.ProductCardContent>
      <S.ProductCardCostAndBuy>
        <S.Cost>
          {isCart
            ? (productData.cost * productCount).toFixed(2)
            : productData.cost}{' '}
          р.
        </S.Cost>
        {isCart && (
          <ButtonCountChange
            productCount={productCount}
            updateProductCount={updateProductCount}
          />
        )}
        <ButtonBuy
          productsCartData={productsCartData}
          updateProductsCartData={updateProductsCartData}
          productData={productData}
          isCart={isCart}
          checkIsProductInCart={checkIsProductInCart}
          index={index}
          updateProductCost={updateProductCost}
        />
      </S.ProductCardCostAndBuy>
    </S.ProductCardWrapper>
  );
};

ProductCard.propTypes = {
  productData: shape({
    id: number,
    name: string,
    cost: string,
    description: string
  }),
  productsCartData: array,
  updateProductsCartData: func,
  isCart: bool,
  checkIsProductInCart: func,
  index: number,
  updateProductCost: func
};

export default ProductCard;
