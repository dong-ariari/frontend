import styled from "styled-components";

export const Layer = styled.div`
  width: 36.688rem;
  height: 3rem;
  display: flex;
  border-bottom: solid 0.063rem ${(props) => props.theme.color.grey._300};
  padding: 0 1rem 0 0.5rem;
  align-items: center;
  font-family: 'Pretendard Variable';
`;

export const Container = styled.form`
  height: 2.25rem;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const Input = styled.input`
  height: inherit;
  flex: 1;

  outline: none;
  box-shadow: none;
  padding: 0;
  border: none;
  color: ${(props) => props.theme.color.grey._700};
  ${(props) => props.theme.typo.fontSize._3};
  ${(props) => props.theme.typo.fontWeight._500};
  &::placeholder {
    color: ${(props) => props.theme.color.grey._400};
    opacity: 1;
  }
  &::-ms-input-placeholder {
    color: ${(props) => props.theme.color.grey._400};
  }
`;

export const Button = styled.button`
  background: url(${(props) => props.$url}) no-repeat;
  width: 2rem;
  height: 2rem;
  border: none;
  cursor: pointer;
`;
