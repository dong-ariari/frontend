import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.small ? "17.625rem" : "24rem")};
`;
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Poster = styled.img`
  width: full;
  height: ${(props) => (props.small ? "12.563rem" : "17.125rem")};
  object-fit: cover;
  border-radius: 0.625rem;
  background-color: ${(props) => props.theme.color.grey._200};
`;
export const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: 0.5rem;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.color.grey._800};
  ${(props) => props.theme.typo.fontSize._4};
  ${(props) => props.theme.typo.fontWeight._600};
`;

export const Badge = styled.div`
  padding: 0.313rem 0.625rem;
  background-color: ${(props) => props.theme.color.grey._0};
  border-radius: 0.5rem;
  color: ${(props) => props.theme.color.grey._800};
  ${(props) => props.theme.typo.fontSize._8};
  ${(props) => props.theme.typo.fontWeight._600};
`;

export const Text = styled.p`
  display: block
  width: 100%;
  max-height: 2.75rem;
  overflow: auto;
  word-wrap: break-word;
  text-overflow: ellipsis;
  text-align: start;
  ${(props) => props.theme.typo.fontSize._7};
`;
