import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;
export const Title = styled.p`
  padding: 0.4375rem 0.625rem;
  border-radius: 0.625rem;
  background-color: ${(props) => props.theme.color.grey._0};
  color: ${(props) => props.theme.color.grey._800};
  ${(props) => props.theme.typo.fontSize._8};
  ${(props) => props.theme.typo.fontWeight._700};
`;
