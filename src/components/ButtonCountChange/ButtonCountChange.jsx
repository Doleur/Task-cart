import React from 'react';
import { bool, func, number } from 'prop-types';

import Input from '../Input';
import * as S from './styled';

const ButtonCountChange = ({ id, dispatch, count, isCart }) => {
  const handleChange = (event) => {
    dispatch({
      type: 'NEW_COUNT_INPUT',
      id,
      count: parseInt(event.target.value)
    });
  };
  const handleBlur = () => {
    if (!count) {
      dispatch({
        type: 'NEW_COUNT_INPUT',
        id,
        count: 1
      });
    }
  };

  return (
    <S.ButtonCountChangeWrapper>
      <S.ButtonCountChange
        isCart={isCart}
        onClick={() => dispatch({ type: 'UPDATE_PRODUCT_COUNT', id, count: 1 })}
      >
        +
      </S.ButtonCountChange>
      <Input
        count={count}
        handleChange={handleChange}
        handleBlur={handleBlur}
      />
      <S.ButtonCountChange
        isCart={isCart}
        onClick={() =>
          dispatch({ type: 'UPDATE_PRODUCT_COUNT', id, count: -1 })
        }
      >
        -
      </S.ButtonCountChange>
    </S.ButtonCountChangeWrapper>
  );
};

ButtonCountChange.propTypes = {
  id: number,
  dispatch: func,
  count: number,
  isCart: bool
};

export default ButtonCountChange;
