import styled from 'styled-components';

export const ButtonUI = styled.button`
  padding: 10px 20px;
  border-radius: 4px;
  color: #000;
  outline: 0;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;
