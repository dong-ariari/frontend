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
  /* display: border-box; */
  margin-top: 0.75rem;
`;

export const Container = styled.div`
  &:after {
    content: "";
    position: absolute;
    top: -0.625rem;
    width: 1.563rem;
    height: 0.75rem;
    background-image: url(${(props) => props.$triangle});
    background-size: cover;
    background-repeat: no-repeat;
  }
  &::-webkit-scrollbar {
    opacity: 0;
    width: 0.5rem;
  }
  align-items: center;
  height: 13.125rem;
  border: solid 0.063px ${(props) => props.theme.color.grey._100};
  box-shadow: 0px 15px 50px 0px rgba(36, 36, 36, 0.15);
  background-color: ${(props) => props.theme.color.white};
  width: 14.938rem;
  border-radius: 1rem;
  padding: 1rem 0;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: thin;

  &:hover {
    &::-webkit-scrollbar {
      opacity: 1;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.color.grey._300};
      border-radius: 1rem;
    }
    &::-webkit-scrollbar-track {
      background-color: ${(props) => props.theme.color.grey._100};
      margin: 1rem 0;
      border-radius: 1rem;
    }
  }
  &:last-child div:nth-child(5) {
    div:nth-child(3) {
      border-bottom: none;
    }
  }
`;

export const Item = styled.div`
  margin: 0 0.75rem 0 1.25rem;
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

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color.blue._400};
  color: ${(props) => props.theme.color.white};
  border-radius: 0.375rem;
  border: none;
  ${(props) => props.theme.typo.fontSize._8};
  ${(props) => props.theme.typo.fontWeight._600};

  width: 12rem;
  min-height: 2rem;
`;
