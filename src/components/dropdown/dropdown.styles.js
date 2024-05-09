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
  // border: solid 0.063rem ${(props) => props.theme.color.grey._200};
  border-radius: 0.5rem;
  height: fit-content;
  position: relative;
  
`;

export const Head = styled.button`
z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 14.125rem;
  padding: 0.375rem 0.75rem;
  border: solid 0.063rem
    ${(props) => {
      return props.$active === false
        ? props.theme.color.grey._0
        : props.$isOpen
        ? props.theme.color.grey._200
        : props.theme.color.grey._700;
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

export const Dropdown = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  padding-top: 38px;
  background-color: ${(props) => props.theme.color.grey._100};
  border-radius: 0.5rem;
`;

export const Spread = styled.div`
  display: flex;
  padding-left: 1rem;
  height: 2.25rem;
  justify-content: start;
  align-items: center;
  color: ${(props) => props.theme.color.grey._600};
  ${(props) => props.theme.typo.fontSize._7};
`;
