import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const Container = styled.div`
  width: 184px;
  border-radius: 12px;
  background-color: ${(props) => {
    return props.$variant === true ? props.theme.color.white : "#F4F4F4";
  }};
  cursor: pointer;
  box-shadow: ${(props) =>
    props.$variant === true ? "0px 4px 12px rgba(0, 0, 0, 0.1)" : "none"};
`;

export const Section = styled.div`
  display: flex;
  padding-left: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
  gap: 8px;
  justify-content: flex-start;
`;

export const Image = styled.img`
  width: 20px;
  height: 20px;
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
