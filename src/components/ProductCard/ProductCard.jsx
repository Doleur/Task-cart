import React from 'react';
import { bool, func, number, shape, string } from 'prop-types';

import ButtonBuy from '../ButtonBuy';
import ButtonCountChange from '../ButtonCountChange';
import * as S from './styled';

const ProductCard = ({ productData, isCart, dispatch, count }) => {
  return (
    <S.ProductCardWrapper>
      <S.ProductCardContent>
        <S.Name>{productData.name}</S.Name>
        <S.Description>{productData.description}</S.Description>
      </S.ProductCardContent>
      <S.ProductCardCostAndBuy>
        <S.Cost>
          {(productData.cost * (count ? count : 0)).toFixed(2)} р.
        </S.Cost>
        {/* {isCart && ( */}
        <ButtonCountChange
          id={productData.id}
          dispatch={dispatch}
          count={count}
          isCart={isCart}
        />
        {/* )} */}
        <ButtonBuy
          productData={productData}
          isCart={isCart}
          dispatch={dispatch}
          count={count}
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
  isCart: bool,
  dispatch: func,
  count: number
};

export default ProductCard;
