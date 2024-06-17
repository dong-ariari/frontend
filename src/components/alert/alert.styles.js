import styled from "styled-components";

export const Layer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  background: transparent;
  position: absolute;
  cursor: pointer;
  user-select: none;
  display: border-box;
  margin-top: 0.469rem;
`;

export const Container = styled.div`
  &:after {
    content: "";
    position: absolute;
    top: -0.469rem;
    width: 19px; 
    height: 9px; 
    background-image: url(${(props) => props.$triangle});
    background-size: cover;
    background-repeat: no-repeat;
  }
  height: 15.188rem;
  border: solid 0.063px ${props => props.theme.color.grey._100};
  box-shadow: 0px 15px 50px 0px rgba(36, 36, 36, 0.15);
  background-color: ${props => props.theme.color.white};
  width: 15rem;
  border-radius: 1rem;
  padding: 1rem 0;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  &:last-child {
    div:last-child {
      div:last-child {
        border-bottom: none;
      }
    }
  }
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
  }
  div:nth-child(3) {
    ${(props) => props.theme.typo.fontSize._7};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-bottom: 0.5rem;
    border-bottom: solid 0.063rem ${(props) => props.theme.color.grey._200};
  }
`;
