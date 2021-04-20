import React from 'react';
import { bool, func, number, shape, string } from 'prop-types';

import * as S from './styled';

const ButtonCountChange = ({ productCount, updateProductCount }) => {
  return (
    <S.ButtonCountChangeWrapper>
      <S.ButtonCountChange
        onClick={() => updateProductCount((prev) => prev + 1)}
      >
        +
      </S.ButtonCountChange>
      <S.Count>{productCount}</S.Count>
      <S.ButtonCountChange
        onClick={() =>
          updateProductCount((prev) => (prev === 1 ? prev : prev - 1))
        }
      >
        -
      </S.ButtonCountChange>
    </S.ButtonCountChangeWrapper>
  );
};

ButtonCountChange.propTypes = {
  productData: shape({
    id: number,
    name: string,
    cost: string,
    description: string
  }),
  updateProductsCartData: func,
  isCart: bool,
  checkIsProductInCart: func,
  index: number,
  productCount: number,
  updateProductCount: func
};

export default ButtonCountChange;
