import React, { useEffect, useState } from 'react';
import { bool, func, number, shape, string } from 'prop-types';

import * as S from './styled';

const ButtonBuy = ({
  updateProductsCartData,
  productData,
  isCart,
  checkIsProductInCart,
  index,
  updateProductCost
}) => {
  const [isInCartButton, updateIsInCartButton] = useState(true);

  const handleChange = () => {
    if (isCart) {
      updateProductsCartData((prev) => {
        prev.splice(index, 1);
        return [...prev];
      });
      updateProductCost((prev) => {
        let indexProduct = prev.findIndex(
          (product) => product.id === productData.id
        );
        prev.splice(indexProduct, 1);
        return [...prev];
      });
      return;
    }
    if (!isInCartButton) {
      updateProductsCartData((prev) => [...prev, productData]);
    } else {
      window.scrollTo(0, 0);
    }
  };

  const displayTextButton = () => {
    if (isCart) return 'Удалить';

    if (isInCartButton) return 'В корзине';
    return 'Купить';
  };

  useEffect(() => {
    updateIsInCartButton(checkIsProductInCart(productData.id));
  });

  return (
    <S.Button
      onClick={handleChange}
      isInCartButton={isInCartButton}
      isCart={isCart}
    >
      {displayTextButton()}
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
  updateProductsCartData: func,
  isCart: bool,
  checkIsProductInCart: func,
  index: number,
  updateProductCost: func
};

export default ButtonBuy;
