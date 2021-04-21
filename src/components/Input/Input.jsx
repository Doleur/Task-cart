import React from 'react';
import { func, number } from 'prop-types';

import * as S from './styled';

const Input = ({ handleChange, handleBlur, count }) => {
  return (
    <S.Count
      value={count ? count : ''}
      onChange={handleChange}
      type="number"
      onBlur={handleBlur}
    />
  );
};

Input.propTypes = {
  handleChange: func,
  handleBlur: func,
  count: number
};

export default Input;
