import styled from 'styled-components';

const cartStyle = `
  margin: 10px 0;
  height: 100%;
  background-color: #c5d9ff;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  display: flex;
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  font-size: 25px;
  padding: 10px;
  background-color: #ffffff;
  z-index: 100;
`;

export const Main = styled.main`
  padding-top: 50px;
  z-index: 1;
`;

export const CartWrapper = styled.div`
  width: 100%;
  height: 350px;
  padding: 20px;
  margin-bottom: 20px;
`;

export const Cart = styled.div`
  ${cartStyle}
  overflow-y: scroll;
`;

export const ProductList = styled.div`
  width: 100%;
  padding: 20px;
`;

export const EmptyCart = styled.div`
  ${cartStyle}
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  color: #646464;
  border-radius: 20px;
`;
