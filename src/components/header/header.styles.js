import styled from "styled-components";

export const Layer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ffd7ff;
  user-select: none;
  height: 5rem;
  font-family: "Pretendard Variable";
`;
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90rem;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4.438rem;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  color: #242424;
  line-height: 100%;
`;

export const Eng = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 1.75rem;
  margin: 0 0.25rem 0 0.375rem;
`;

export const Kor = styled.h1`
  font-size: 1.125rem;
  font-family: Noto Sans KR;
  font-weight: 700;
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
  a {
    &:nth-child(2) {
      margin-left: 3.375rem;
      margin-right: 3rem;
    }
  }
`;

export const Link = styled.a`
  ${(props) => props.theme.typo.fontSize._7};
  ${(props) => props.theme.typo.fontWeight._500};
  color: ${(props) => props.theme.color.grey._700};
  position: relative;
  cursor: pointer;
`;

export const Alert = styled.div`
  background-color: #ff3030;
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 100%;
  position: absolute;
  top: -0.063rem;
  left: 2.563rem;
`;
