import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;
export const Container = styled.div`
  width: 12.875rem;
  border-radius: 0.75rem;
  background-color: ${(props) => {
    return props.$variant === true && props.theme.color.grey._100;
  }};
  cursor: pointer;
`;

export const Section = styled.div`
  display: flex;
  padding-left: 1.25rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  gap: 0.5rem;
  justify-content: flex-start;
`;

export const Image = styled.img`
  width: 1.25rem;
  height: 1.25rem;
  align-self: center;
`;

export const Text = styled.p`
  align-content: center;
  color: ${(props) => {
    return props.$variant === true
      ? props.theme.color.grey._800
      : props.theme.color.grey._600;
  }};
  ${(props) => props.theme.typo.fontSize._6};
  ${(props) => {
    return props.$variant === true
      ? props.theme.typo.fontWeight._600
      : props.theme.typo.fontWeight._500;
  }};
`;
