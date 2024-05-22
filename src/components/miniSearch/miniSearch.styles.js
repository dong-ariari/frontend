import styled from "styled-components";

export const Layer = styled.button`
  border: none;
  width: 17.625rem;
  height: 2.25rem;
  border-radius: 1.25rem;
  background-color: ${(props) => props.theme.color.white};
  display: flex;
  align-items: center;
  padding-left: 1.125rem;
  padding-right: 1.375rem;
`;

export const Placeholder = styled.span`
  border: none;
  flex: 1;
  height: 1.313rem;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color.grey._400};
  ${(props) => props.theme.typo.fontSize._7};
  ${(props) => props.theme.typo.fontWeight._500};
  overflow: hidden;
  white-space: nowrap;
`;
