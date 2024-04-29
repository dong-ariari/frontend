import * as S from "./cards.styles";

export default function Cards({small,  data }) {
  return (
    <S.Container small={small}>
      <S.Main>
        <S.Poster small={small} src={data.posterData} />
        <S.Box>
          <S.Title>{data.clubName}</S.Title>
          <S.Badge>Badge</S.Badge>
        </S.Box>
      </S.Main>
      <S.Text>{data.recruitText}</S.Text>
    </S.Container>
  );
}
