import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  gap: 80px;
  padding-top: 12px;
  padding-bottom: 12px;
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
  border-width: 1px;
  border-style: solid;
  border-radius: 8px;
  width: 444px;
  padding-left: 16px;
  padding-top: 12px;
  padding-bottom: 11px;

  &::placeholder {
    color: ${(props) => props.theme.color.grey._400};
  }

  &:focus {
    border-color: ${(props) => props.theme.color.grey._300};
    outline: none;
  }
`;
