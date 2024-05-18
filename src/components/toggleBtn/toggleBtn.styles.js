import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 6.25rem;
  padding: 0.75rem 0rem;
  max-width: 41.563rem;
  justify-content: space-between;
`;

export const Title = styled.p`
  min-width: 6.25rem;
  color: ${(props) => props.theme.color.grey._500};
  ${(props) => props.theme.typo.fontSize._6};
  ${(props) => props.theme.typo.fontWeight._500};
  align-self: flex-start;
`;

export const BtnContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const BtnSection = styled.div`
  display: flex;
  border-radius: 0.5rem;
  padding: 0.25rem;
  background-color: ${(props) => props.theme.color.grey._200};
`;

export const Btn = styled.div`
  padding: 0.5rem 1.625rem;
  border-radius: 0.5rem;
  background-color: ${(props) =>
    props["data-active"]
      ? props.theme.color.blue._400
      : props.theme.color.grey._200};
  color: ${(props) =>
    props["data-active"]
      ? props.theme.color.white
      : props.theme.color.grey._500};
  ${(props) => props.theme.typo.fontSize._7};
  ${(props) => props.theme.typo.fontWeight._700};
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props["data-active"]
        ? props.theme.color.blue._500
        : props.theme.color.grey._200};
  }

  &:active {
    background-color: ${(props) =>
      props["data-active"]
        ? props.theme.color.blue._600
        : props.theme.color.grey._200};
  }
`;
