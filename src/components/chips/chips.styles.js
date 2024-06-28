import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Title = styled.p`
  padding: 0.313rem 0.75rem;
  border-radius: 0.875rem;
  background-color: ${(props) => {
    return props.$variant === true
      ? props.theme.color.grey._800
      : props.theme.color.white;
  }};
  color: ${(props) => {
    return props.$variant === true
      ? props.theme.color.white
      : props.theme.color.grey._600;
  }};
  ${(props) => props.theme.typo.fontSize._7};
  ${(props) => props.theme.typo.fontWeight._600};
  cursor: pointer;
`;
