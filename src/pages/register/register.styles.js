import styled from "styled-components";

export const Layer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2.375rem;
  width: 50.875rem;
  gap: 2rem;
  margin-bottom: 5.625rem;
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

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 4.313rem;
  gap: 1.375rem;
`;
