import * as S from "./cards.styles";

export default function Cards({ small, cardList }) {
  return (
    <S.Layer>
      {cardList.map((item) => (
        <S.Container small={small}>
          <S.Main>
            <S.Poster small={small} src={item.posterData} />
            <S.Box>
              <S.Title>{item.clubName}</S.Title>
              <S.Badge>Badge</S.Badge>
            </S.Box>
          </S.Main>
          <S.Text>{item.recruitText}</S.Text>
        </S.Container>
      ))}
    </S.Layer>
  );
}
