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

export const TextAreaContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Textarea = styled.textarea`
  background-color: ${(props) => props.theme.color.grey._0};
  border-color: ${(props) => props.theme.color.grey._100};
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 0.5rem;
  padding: 0.75rem 0rem 0.6875rem 1rem;
  max-width: 27.75rem;
  min-width: 27.75rem;
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

export const Counter = styled.p`
  ${(props) => props.theme.typo.fontSize._9};
  ${(props) => props.theme.typo.fontWeight._400};
  color: ${(props) => props.theme.color.grey._400};
`;

export const CharCounter = styled.p`
  position: absolute;
  display: flex;
  right: 1rem;
  bottom: 0.5rem;
  ${(props) => props.theme.typo.fontSize._9};
  ${(props) => props.theme.typo.fontWeight._400};
  color: ${(props) =>
    props.textLength > 499
      ? props.theme.color.blue._600
      : props.theme.color.grey._400};
`;
