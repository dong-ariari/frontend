import styled from "styled-components";

export const InputContainer = styled.div`
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
  /* align-self: center; */
  align-self: flex-start;
`;

export const StyledInput = styled.input`
  background-color: ${(props) =>
    props.isEditable ? props.theme.color.grey._0 : props.theme.color.grey._200};
  border-color: ${(props) =>
    props.isEditable
      ? props.theme.color.grey._100
      : props.theme.color.grey._200};
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 0.5rem;
  width: 27.75rem;
  padding-left: 1rem;
  padding-top: 0.75rem;
  padding-bottom: 0.6875rem;
  ${(props) => props.theme.typo.fontSize._7};
  ${(props) => props.theme.typo.fontWeight._500};

  &::placeholder {
    color: ${(props) =>
      props.isEditable
        ? props.theme.color.grey._400
        : props.theme.color.grey._500};
  }

  &:focus {
    border-color: ${(props) =>
      props.isEditable
        ? props.theme.color.blue._400
        : props.theme.color.grey._200};
    outline: none;
  }
`;
