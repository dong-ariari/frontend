import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;
export const Container = styled.div`
  width: 11.5rem;
  border-radius: 0.75rem;
  background-color: ${(props) => {
    return props.$variant === true ? props.theme.color.white : "#F4F4F4";
  }};
  cursor: pointer;
  box-shadow: ${(props) =>
    props.$variant === true ? "0px 4px 12px rgba(0, 0, 0, 0.1)" : "none"};
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
      ? props.theme.color.grey._700
      : props.theme.color.grey._500;
  }};
  ${(props) => props.theme.typo.fontSize._6};
  ${(props) => {
    return props.$variant === true
      ? props.theme.typo.fontWeight._600
      : props.theme.typo.fontWeight._500;
  }};
`;
