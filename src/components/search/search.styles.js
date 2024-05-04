import styled from "styled-components";

export const Container = styled.form`
  width: 36.688rem;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 0.063rem ${(props) => props.theme.color.grey._300};
  padding: 0 1rem 0 0.5rem;
`;
export const Input = styled.input`
  flex: 1;
  height: inherit;
  margin-bottom: 0.375rem;
  outline: none;
  box-shadow: none;
  color: ${props => props.theme.color.grey._700};
  ${(props) => props.theme.typo.fontSize._3};
  ${(props) => props.theme.typo.fontWeight._500};
`;

export const Button = styled.button`
  background: url(${(props) => props.$url}) no-repeat;
  width: 2rem; 
  height: 2rem;
  border: none;
`;
