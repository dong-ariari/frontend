import styled from "styled-components";

export const Layer = styled.div`
  background-color: ${(props) => props.theme.color.grey._300};
  color: ${(props) => props.theme.color.white};
  height: 3.5rem;
  padding: 0 1.5rem;
  border-radius: 3.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  gap: 0.5rem;
  ${(props) => props.theme.typo.fontSize._6};
  ${(props) => props.theme.typo.fontWeight._600};
  position: absolute;
`;

export const Icon = styled.img`
  height: 1.5rem;
`;
