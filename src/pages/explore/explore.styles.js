import styled from "styled-components";

export const Title = styled.div`
  color: ${(props) => props.theme.color.grey._800};
  ${(props) => props.theme.typo.fontSize._3};
  ${(props) => props.theme.typo.fontWeight._700};
  margin-bottom: 1rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Section = styled.div`
  margin-bottom: 4rem;
`;
