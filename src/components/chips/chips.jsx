import * as S from "./chips.styles";

const Chips = ({ title, variant }) => {
  const handleChipsClick = (uri) => {
    console.log(uri);
  };

  return (
    <>
      <S.Container variant={variant}>
        {title.map((item) => (
          <S.Title key={item.id} onClick={() => handleChipsClick(item.uri)}>
            {item.content}
          </S.Title>
        ))}
      </S.Container>
    </>
  );
};

export default Chips;
