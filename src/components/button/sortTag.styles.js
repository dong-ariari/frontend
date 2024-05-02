import styled from "styled-components";

export const Layer = styled.div`
display: flex; 
flex-direction: row;
gap: 0.75rem; 
`


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.375rem 0.75rem; 
  border-radius: 0.5rem;
  border: solid 0.063rem ${(props) => {
    return props.$select === true
      ? props.theme.color.grey._600
      : props.theme.color.grey._200
  }};; 
  background-color: ${(props) => {
    return props.$select === true
      ? props.theme.color.grey._0
      : props.theme.color.grey._200;
  }};
  color: ${(props) => {
    return props.$select === true
      ? props.theme.color.grey._700
      : props.theme.color.grey._400;
  }};
  ${(props) => props.theme.typo.fontSize._6};
  ${(props) => props.theme.typo.fontWeight._600};
`;
