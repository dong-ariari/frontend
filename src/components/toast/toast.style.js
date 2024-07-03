import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
0% {
    opacity: 0;
}
50% {
    opacity: 1;
}
80%{
    opacity: 1;
}
100%{
    opacity: 0;
}
`;

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
  ${(props) =>
    props.$visible
      ? css`
          animation: ${fadeIn} 2.5s ease-in-out;
        `
      : `opacity: 0;`}
`;

export const Icon = styled.img``;
