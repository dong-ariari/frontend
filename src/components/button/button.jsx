import * as S from "./button.styles";

const Button = ({ title, onClick }) => {
  return (
    <S.Container>
      <S.Button onClick={onClick}>{title}</S.Button>
    </S.Container>
  );
};

export default Button;
