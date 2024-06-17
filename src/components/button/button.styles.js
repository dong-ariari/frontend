import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Button = styled.div`
  cursor: pointer;
  padding: 0.625rem 1.875rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.color.blue._400};
  color: ${(props) => props.theme.color.white};
  ${(props) => props.theme.typo.fontSize._6};
  ${(props) => props.theme.typo.fontWeight._700};

  &:hover {
    background-color: ${(props) => props.theme.color.blue._500};
  }

  &:active {
    background-color: ${(props) => props.theme.color.blue._600};
    color: ${(props) => props.theme.color.grey._100};
  }
`;
