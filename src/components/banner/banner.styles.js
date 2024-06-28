import styled from "styled-components";

export const Layer = styled.div`
  max-width: 48.875rem;
  height: 12.063rem;
  background-color: ${(props) => props.theme.color.purple._400};
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
  padding: 2rem 0 0 2rem;
  & > img {
    position: absolute;
    &:nth-child(1) {
      top: 0;
      left: 22.106rem;
    }
    &:nth-child(2) {
      top: 4.409rem;
      left: 46.048rem;
    }
    &:nth-child(3) {
      top: 6.938rem;
      left: 35.75rem;
    }
    &:nth-child(4) {
      top: 35.125rem;
      left: 8.188rem;
    }
  }
`;

export const Title = styled.p`
  color: ${(props) => props.theme.color.grey._800};
  ${(props) => props.theme.typo.fontWeight._600};
  font-size: 1.375rem;

  letter-spacing: 0%;
  word-break: break-all;
  line-height: 2.063rem;
`;

export const List = styled.ul`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.color.grey._700};

  ${(props) => props.theme.typo.fontWeight._500};
  ${(props) => props.theme.typo.fontSize._7};
  list-style-type: disc;
  list-style: inside;
  gap: 0.5rem;
`;

export const Highlight = styled.span`
  color: ${(props) => props.theme.color.grey._800};
`;
