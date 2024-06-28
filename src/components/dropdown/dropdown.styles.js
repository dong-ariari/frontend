import styled from "styled-components";

export const Layer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  z-index: 10;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.color.grey._100};
  border-radius: 0.5rem;
  height: fit-content;
  position: relative;
  cursor: pointer;
`;

export const Head = styled.button`
  width: ${(props) => {
    return props.$isBig ? "14rem" : "12.063rem";
  }};
  cursor: pointer;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.375rem 0.75rem;

  ${(props) => {
    return props.$active === false
      ? `border: solid 0.063rem ${props.theme.color.grey._200}`
      : props.$isOpen
      ? `border: solid 0.063rem ${props.theme.color.grey._200}; 
      border-bottom: transparent;`
      : `border: solid 0.063rem ${props.theme.color.grey._700}`;
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

  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 50px;
`;

export const Text = styled.span`
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
  padding-top: 2.375rem;
  background-color: ${(props) => props.theme.color.grey._0};
  border-radius: 0.5rem;
  ${(props) =>
    props.$isOpen && `border: solid 0.063rem ${props.theme.color.grey._200}`}
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
