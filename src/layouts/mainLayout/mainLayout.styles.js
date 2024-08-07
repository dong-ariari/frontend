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
  ${(props) =>
    props.$miniSearch && props.$chips
      ? `justify-content: space-between;`
      : props.$chips
      ? `& > *:first-child {display: none;}
        justify-content: flex-end;`
      : "display: none;"}

  width: 90rem;
`;

export const Container = styled.div`
  width: 90rem;
  flex: 1;
  margin: 4rem auto 0 auto;
  display: flex;
  flex-direction: row;
  gap: 2.625rem;
`;
