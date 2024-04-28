import * as S from "./chips.styles";

const Chips = ({ title, variant }) => {
  return (
    <>
      <S.Container variant={variant}>
        {title.map((item) => (
          <S.Title>{item.content}</S.Title>
        ))}
      </S.Container>
    </>
  );
};

export default Chips;
