import React, { useState } from 'react';

import { productsData } from '../../constants/productsData';
import Cart from '../Cart';
import ProductCard from '../ProductCard';
import * as S from './styled';

const initialState = {
  cart: [],
  countsProducts: {}
};

const App = () => {
  // const [productsCartData, updateProductsCartData] = useState([]);

  const checkIsProductInCart = (id) => {
    return productsCartData.some((product) => product.id === id);
  };

  return (
    <>
      <S.Header>
        <div>Logo here</div>
      </S.Header>
      <S.Main>
        <Cart
          productsCartData={productsCartData}
          updateProductsCartData={updateProductsCartData}
          checkIsProductInCart={checkIsProductInCart}
        />
        <S.ProductList>
          <h2>Список Продуктов</h2>
          {productsData.map((productData) => (
            <ProductCard
              key={`product-list-${productData.id}`}
              productData={productData}
              productsCartData={productsCartData}
              updateProductsCartData={updateProductsCartData}
              isCart={false}
              checkIsProductInCart={checkIsProductInCart}
            />
          ))}
        </S.ProductList>
      </S.Main>
    </>
  );
};

export default App;
