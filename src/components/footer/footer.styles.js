import styled from "styled-components";

export const Layer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.color.grey._800};
  padding-top: 7.25rem;
  padding-bottom: 1.75rem;
  display: flex; 
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.span`
  color: #fafafa;
  ${(props) => props.theme.typo.fontSize._8};
  ${(props) => props.theme.typo.fontWeight._500};
`;
