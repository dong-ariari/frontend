import * as S from "./badge.styles";

const Badge = ({ title }) => {
  return (
    <>
      <S.Container>
        <S.Title>{title}</S.Title>
      </S.Container>
    </>
  );
};

export default Badge;
