import styled from "styled-components";

export const Layer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2.375rem;
  width: 50.875rem;
  gap: 2rem;
  margin-bottom: 1rem;
`;

export const Container = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.color.white};
  border: solid 0.063rem ${(props) => props.theme.color.grey._100};
  border-radius: 1rem;
  box-shadow: 0 -3px 30px 0 ${(props) => props.theme.color.grey._100};
  gap: 3rem;
`;

export const Title = styled.div`
  color: ${(props) => props.theme.color.grey._700};
  ${(props) => props.theme.typo.fontSize._4};
  ${(props) => props.theme.typo.fontWeight._600};
  padding-bottom: 1rem;
  border-bottom: solid 1px ${(props) => props.theme.color.grey._200};
`;
