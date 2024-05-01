import styled from "styled-components";

export const TextContainer = styled.div`
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

export const Textarea = styled.textarea`
  background-color: ${(props) => props.theme.color.grey._0};
  border-color: ${(props) => props.theme.color.grey._100};
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 0.5rem;
  padding-left: 1rem;
  padding-top: 0.75rem;
  padding-bottom: 0.6875rem;
  max-width: 27.75rem;
  min-width: 9rem;
  min-height: 8.063rem;
  ${(props) => props.theme.typo.fontSize._7};
  ${(props) => props.theme.typo.fontWeight._500};

  &::placeholder {
    color: ${(props) => props.theme.color.grey._400};
  }

  &:focus {
    border-color: ${(props) => props.theme.color.blue._400};
    outline: none;
  }
`;
