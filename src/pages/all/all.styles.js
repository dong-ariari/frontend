import styled from "styled-components";

export const Title = styled.div`
  color: ${(props) => props.theme.color.grey._800};
  ${(props) => props.theme.typo.fontSize._3};
  ${(props) => props.theme.typo.fontWeight._700};
  margin-bottom: 1rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
`;

export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.55);
  position: absolute;
  right: 0;
  left: 0;
  top: 20.25rem;
  bottom: 0;
  z-index: 1;
`;

export const SearchModal = styled.div`
  z-index: 1;
  position: absolute;
  top: 5rem;
  height: 13.25rem;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(35px);
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  align-items: center;
  gap: 1.5rem;
`;

export const Filters = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 0 auto;
`;
