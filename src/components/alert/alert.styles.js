import styled from "styled-components";

export const Layer = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
`;
export const Triangle = styled.div`

`;

export const Container = styled.div`
  width: 15rem;
  border-radius: 1rem;
  padding: 1rem 0;
  //   최대 display item 개수에 따라 추후 지정
  //   max-height: ;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.div`
  display: block;
  width: 12.5rem;
  color: ${(props) => props.theme.color.grey._700};
  ${(props) => props.theme.typo.fontWeight._500};
  div:nth-child(1) {
    color: ${(props) => props.theme.color.grey._500};
    ${(props) => props.theme.typo.fontSize._9};
    ${(props) => props.theme.typo.fontWeight._400};
  }
  div:nth-child(2) {
    margin-top: 0.25rem;
    ${(props) => props.theme.typo.fontSize._8};
    ${(props) => props.theme.typo.fontWeight._500};
  }
  div:nth-child(3) {
    ${(props) => props.theme.typo.fontSize._7};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-bottom: solid 1px ${(props) => props.theme.color.grey._200};
  }
`;
