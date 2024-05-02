import styled from "styled-components";

export const Layer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.color.grey._100};
  border: solid 0.063rem ${(props) => props.theme.color.grey._200};
  border-radius: 0.5rem;

`;

export const Head = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.375rem 0.75rem;
  border: solid 0.063rem
    ${(props) => {
      return props.$active === true
        ? props.theme.color.grey._0
        : props.theme.color.grey._200;
    }};
  border-radius: 0.5rem;
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

export const Spread = styled.div`
  display: flex;
  height: 2.25rem;
  justify-content: start;
  align-items: center;
  padding-left: 1rem;
  color: ${(props) => props.theme.color.grey._600};
  ${(props) => props.theme.typo.fontSize._7};
`;
