import React, { useReducer } from 'react';

import { productsData } from '../../constants/productsData';
import reducer from '../../store/reducer';
import Cart from '../Cart';
import ProductCard from '../ProductCard';
import * as S from './styled';

const initialState = {
  cart: [],
  countsProducts: {}
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <S.Header>
        <div>Logo here</div>
      </S.Header>
      <S.Main>
        <S.ProductList>
          <h2>Список Продуктов</h2>
          {productsData.map((productData) => (
            <ProductCard
              key={`product-list-${productData.id}`}
              productData={productData}
              isCart={false}
              dispatch={dispatch}
              count={state.countsProducts[productData.id] || 1}
            />
          ))}
        </S.ProductList>
        <Cart
          productsData={state.cart}
          dispatch={dispatch}
          countsProducts={state.countsProducts}
        />
      </S.Main>
    </>
  );
};

export default App;
