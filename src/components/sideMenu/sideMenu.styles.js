import styled from "styled-components";

export const Container = styled.div`
  width: 184px;
  border-radius: 12px;
  background-color: ${(props) => props.theme.color.grey._500};
  cursor: pointer;
`;

export const Section = styled.div`
  display: flex;
  padding-left: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
  gap: 8px;
  justify-content: flex-start;
`;

export const Image = styled.img`
  width: 20px;
  height: 20px;
`;

export const Text = styled.p`
  align-content: center;
  ${(props) => props.theme.typo.fontWeight._600};
  ${(props) => props.theme.typo.fontSize._6};
`;

// export const Section = styled.div`
//   padding-left: 0.875rem;
//   padding-right: 0.875rem;
//   padding-top: 0.5rem;
//   padding-bottom: 0.5rem;
//   border-radius: 1rem;
//   background-color: ${(props) => {
//     return props.$variant === true
//       ? props.theme.color.grey._800
//       : props.theme.color.grey._200;
//   }};
//   color: ${(props) => {
//     return props.$variant === true
//       ? props.theme.color.white
//       : props.theme.color.grey._600;
//   }};
//   ${(props) => props.theme.typo.fontSize._5};
//   ${(props) => props.theme.typo.fontWeight._500};
//   cursor: pointer;
// `;
