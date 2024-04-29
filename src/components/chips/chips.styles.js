import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const Title = styled.p`
  padding-left: 0.875rem;
  padding-right: 0.875rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 1rem;
  background-color: ${(props) => {
    return props.$variant === true
      ? props.theme.color.grey._800
      : props.theme.color.grey._200;
  }};
  color: ${(props) => {
    return props.$variant === true
      ? props.theme.color.white
      : props.theme.color.grey._600;
  }};
  ${(props) => props.theme.typo.fontSize._5};
  ${(props) => props.theme.typo.fontWeight._500};
  cursor: pointer;
`;
