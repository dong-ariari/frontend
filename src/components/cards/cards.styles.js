import styled from "styled-components";

export const Layer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  max-width: 74.5rem;
  gap: 3.75rem ${(props) => (props.$small ? "1rem" : "1.25rem")};
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  ${(props) =>
    props.$carousel
      ? `overflow-x: scroll;
        scroll-behavior: smooth;
        scroll-snap-type: x mandatory;
        `
      : `flex-wrap: wrap;`};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.$small ? "17.875rem" : "24rem")};
  scroll-snap-align: start;
`;
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  position: relative;
  ${(props) =>
    props.$small &&
    `&:hover {
    & > img:nth-child(1) {
      filter: brightness(0.84);
    }
    & > img:nth-child(2) {
      display: block;
    }
  }`}
`;

export const Poster = styled.img`
  width: full;
  height: ${(props) => (props.$small ? "12.563rem" : "17.125rem")};
  object-fit: cover;
  border-radius: 0.625rem;
`;

export const Star = styled.img`
  display: none;
  height: 1.022rem;
  position: absolute;
  left: 15.375rem;
  top: 10.063rem;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.color.grey._800};
  ${(props) => props.theme.typo.fontSize._4};
  ${(props) => props.theme.typo.fontWeight._700};
  height: 1.75rem;
`;

export const Badge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 1.75rem;
  padding: 0.313rem 0.625rem;
  background-color: ${(props) => props.theme.color.grey._0};
  border-radius: 0.5rem;
  color: ${(props) => props.theme.color.grey._800};
  ${(props) => props.theme.typo.fontSize._8};
  ${(props) => props.theme.typo.fontWeight._700};
`;

export const Text = styled.p`
  display: -webkit-box;
  word-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 2.625rem;
  ${(props) => props.theme.typo.fontSize._7};
`;
