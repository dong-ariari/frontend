import styled from "styled-components";

export const Layer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
`;

export const Head = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.375rem 0.75rem;
  border-radius: 0.5rem;
  border: solid 0.063rem
    ${(props) => {
      return props.$active === true
        ? props.theme.color.grey._600
        : props.theme.color.grey._200;
    }};
  background-color: ${(props) => {
    return props.$active === true
      ? props.theme.color.grey._0
      : props.theme.color.grey._200;
  }};
  color: ${(props) => {
    return props.$active === true
      ? props.theme.color.grey._700
      : props.theme.color.grey._400;
  }};
  ${(props) => props.theme.typo.fontSize._6};
  ${(props) =>
    props.$active
      ? props.theme.typo.fontWeight._600
      : props.theme.typo.fontWeight._500};
`;

export const Icon = styled.img`
//   border: solid 1px black;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
