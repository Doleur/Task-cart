import styled from 'styled-components';

const cartStyle = `
  margin: 10px 0;
  height: 100%;
  background-color: #c5d9ff;
`;

export const CartWrapper = styled.div`
  width: 100%;
  height: 80vh;
  padding: 20px;
  margin-bottom: 20px;
`;

export const Cart = styled.div`
  ${cartStyle}
  overflow-y: scroll;
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

export const TotalCost = styled.div`
  font-size: 30px;
  font-weight: 600;
`;
