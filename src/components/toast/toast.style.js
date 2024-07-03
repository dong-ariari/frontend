import styled from "styled-components";

export const Layer = styled.div`
  background-color: ${(props) => props.theme.color.purple._100};
  color: ${(props) => props.theme.color.grey._700};
  ${(props) => props.theme.typo.fontSize._6};
  ${(props) => props.theme.typo.fontWeight._500};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  height: 3.5rem;
  position: absolute;
  left: 0;
  right: 0;
  cursor: default;
`;

export const Icon = styled.img``
