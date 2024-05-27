import styled from "styled-components";

export const Layer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ffd7ff;
  user-select: none;
  height: 5rem;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90rem;
  justify-content: space-between;
  border: solid 1px black;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4.438rem;
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
  cursor: pointer;
  color: #242424; 
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-style: normal;
`;

export const Eng = styled.h1`
  ${(props) => props.theme.typo.fontSize._2};
  ${(props) => props.theme.typo.fontWeight._600};
  font-size: 28px;
  line-height: 100%;
  letter-spacing: -3%;
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
  cursor: pointer;
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
  position: relative;
  cursor: pointer;
`;

export const Alert = styled.div`
  background-color: #ff3030;
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 100%;
  position: absolute;
  top: 0.438rem;
  right: 0;
`;
