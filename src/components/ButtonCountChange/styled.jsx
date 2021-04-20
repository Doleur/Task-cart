import styled from 'styled-components';

export const ButtonCountChangeWrapper = styled.div`
  display: flex;
`;

export const ButtonCountChange = styled.button`
  width: 40px;
  padding: 5px;
  background-color: #ffffff;
  border: none;
  color: #000000;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  &:hover {
    cursor: pointer;
    background-color: #dbdbdb;
  }
`;

export const Count = styled.div`
  width: 50px;
  text-align: center;
  font-size: 20px;
`;
