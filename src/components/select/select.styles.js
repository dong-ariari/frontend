import styled from "styled-components";
import Vector from "../../assets/icons/vector.svg";

export const SelectContainer = styled.div`
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

export const StyledSelect = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: ${(props) => props.theme.color.grey._0};
  border-color: ${(props) => props.theme.color.grey._100};
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 0.5rem;
  width: 27.75rem;
  padding: 0.75rem 1rem;
  background-image: url(${Vector});
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1.5rem;
  ${(props) => props.theme.typo.fontSize._7};
  ${(props) => props.theme.typo.fontWeight._500};
  color: ${(props) => props.theme.color.grey._400};

  &:focus {
    border-color: ${(props) => props.theme.color.grey._300};
    outline: none;
  }
`;
