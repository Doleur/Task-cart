import styled from 'styled-components';

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
  display: flex;
  padding-top: 50px;
  z-index: 1;
`;

export const ProductList = styled.div`
  width: 100%;
  padding: 20px;
`;
