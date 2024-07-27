import styled from "styled-components";
export const Layer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1.5rem;
`;
export const Title = styled.div`
  ${(props) => props.theme.typo.fontSize._3};
  ${(props) => props.theme.typo.fontWeight._700};
  color: ${(props) => props.theme.color.grey._800};
  margin-bottom: 1.5rem;
`;
