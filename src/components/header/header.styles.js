import styled from "styled-components";

export const Layer = styled.div`
  display: flex; 
  justify-content: center;
  background-color: #9bf22c;
`
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 5rem;
  width: 90rem;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4.813rem;
`;

export const Logo = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const Image = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  background-color: ${(props) => props.theme.color.white};
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: 0.3rem;
`;

export const Eng = styled.h1`
  ${(props) => props.theme.typo.fontSize._2};
  ${(props) => props.theme.typo.fontWeight._600};
`;

export const Kor = styled.h1`
  ${(props) => props.theme.typo.fontSize._5};
  ${(props) => props.theme.typo.fontWeight._600};
`;
export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;
export const UserName = styled.div`
  ${(props) => props.theme.typo.fontSize._7};
  ${(props) => props.theme.typo.fontWeight._500};
  color: ${(props) => props.theme.color.grey._700};
`;

export const LinkBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const Link = styled.a`
  color: ${(props) => props.theme.color.grey._700};
  padding: 0.625rem;
`;
