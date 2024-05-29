import styled from "styled-components";

export const Layer = styled.div`
  width: 50.875rem;
  height: 14.063rem;
  background-color: ${(props) => props.theme.color.purple._400};
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
  & > img {
    position: absolute;
    &: nth-child(1) {
      top: 0;
      left: 353.7px;
    }
    &: nth-child(2) {
      top: 70.55px;
      left: 736.77px;
    }
    &: nth-child(3) {
      top: 111px;
      left: 572px;
    }
    &: nth-child(4) {
      top: 562px;
      left: 131px;
    }
  }
`;

export const Title = styled.p`
  color: ${(props) => props.theme.color.grey._800};
  ${(props) => props.theme.typo.fontWeight._700};
  font-size: 1.375rem;
  ling-height: 2.063rem;
  letter-spacing: 0%;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.color.grey._600};
  ${(props) => props.theme.typo.fontWeight._500};
  ${(props) => props.theme.typo.fontSize._7};
`;
