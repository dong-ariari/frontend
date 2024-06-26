import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 6.25rem;
  padding: 0.75rem 0rem;
  max-width: 41.563rem;
  justify-content: space-between;
`;

export const Title = styled.p`
  min-width: 6.25rem;
  color: ${(props) => props.theme.color.grey._500};
  ${(props) => props.theme.typo.fontSize._6};
  ${(props) => props.theme.typo.fontWeight._500};
  align-self: flex-start;
`;

export const ImageSection = styled.div`
  display: flex;
  width: 100%;
`;

export const Image = styled.img`
  object-fit: cover;
  border-radius: 0.75rem;
  width: 6.25rem;
  height: 6.25rem;
`;
