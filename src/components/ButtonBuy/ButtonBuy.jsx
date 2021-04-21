import React from 'react';
import { bool, func, number, shape, string } from 'prop-types';

import * as S from './styled';

const ButtonBuy = ({ productData, isCart, dispatch, count }) => {
  const handleChange = () => {
    if (isCart) {
      dispatch({ type: 'REMOVE_PRODUCT_FROM_CART', productData });
    } else {
      dispatch({
        type: 'ADD_PRODUCT_TO_CART',
        productData,
        count: count > 1 ? 0 : count
      });
    }
  };

  return (
    <S.Button onClick={handleChange} isCart={isCart}>
      {isCart ? 'Удалить' : 'Купить'}
    </S.Button>
  );
};

ButtonBuy.propTypes = {
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

export default ButtonBuy;
