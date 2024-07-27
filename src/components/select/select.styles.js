import styled from "styled-components";
import Vector from "../../assets/icons/vector.svg";

export const SelectContainer = styled.div`
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

export const StyledSelect = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: ${(props) =>
    props.$isEditable ? props.theme.color.grey._0 : props.theme.color.grey._200};
  border-color: ${(props) =>
    props.$isEditable
      ? props.theme.color.grey._100
      : props.theme.color.grey._200};
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 0.5rem;
  width: 28.75rem;
  padding: 0.688rem 1rem;
  background-image: url(${Vector});
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1.5rem;
  ${(props) => props.theme.typo.fontSize._7};
  ${(props) => props.theme.typo.fontWeight._500};
  color: ${(props) => props.theme.color.grey._400};

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

  &:disabled {
    background-color: ${(props) => props.theme.color.grey._200};
    color: ${(props) => props.theme.color.grey._600};
    cursor: auto;
  }
`;
