import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  gap: 5rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
`;

export const Title = styled.p`
  color: ${(props) => props.theme.color.grey._500};
  ${(props) => props.theme.typo.fontSize._6};
  ${(props) => props.theme.typo.fontWeight._500};
  align-self: center;
`;

export const StyledInput = styled.input`
  background-color: ${(props) => props.theme.color.grey._0};
  border-color: ${(props) => props.theme.color.grey._100};
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 0.5rem;
  width: 27.75rem;
  padding-left: 1rem;
  padding-top: 0.75rem;
  padding-bottom: 0.6875rem;

  &::placeholder {
    color: ${(props) => props.theme.color.grey._400};
  }

  &:focus {
    border-color: ${(props) => props.theme.color.grey._300};
    outline: none;
  }
`;
