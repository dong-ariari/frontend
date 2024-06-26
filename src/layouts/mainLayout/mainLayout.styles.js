import styled from "styled-components";

export const Header = styled.div`
  background-color: ${(props) => props.theme.color.purple._100};
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 90rem;
`;
