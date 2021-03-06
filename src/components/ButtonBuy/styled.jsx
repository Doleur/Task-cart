import styled from 'styled-components';

export const Button = styled.button`
  width: 130px;
  padding: 5px;
  background-color: ${(props) =>
    props.isCart ? '#f36161' : props.isInCartButton ? '#76bd55' : '#6095f7'};
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.isCart ? '#af4a4a' : props.isInCartButton ? '#5e9744' : '#4970b9'};
  }
`;
