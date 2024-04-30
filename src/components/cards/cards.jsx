import * as S from "./cards.styles";
import defaultImg from "../../assets/icons/defaultPoster.png";
export default function Cards({ small, cardList }) {
  function errorHandler(e) {
    if (small) {
      e.currentTarget.src = defaultImgSmall;
    } else {
      e.currentTarget.src = defaultImg;
    }
    console.log(e.currentTarget.src);
  }
  return (
    <S.Layer>
      {cardList.map((item) => (
        <S.Container small={small}>
          <S.Main>
            <S.Poster
              small={small}
              src={item.posterData === null ? defaultImg : item.posterData}
              onError={errorHandler}
            />
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
