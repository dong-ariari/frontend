import * as S from "./cards.styles";
import defaultImg from "../../assets/icons/defaultPoster.png";
export default function Cards({ small, cardList, clickHandler }) {
  function errorHandler(e) {
    e.currentTarget.src = defaultImg;
    console.log(e.currentTarget.src);
  }
  return (
    <S.Layer>
      {cardList.map((item) => (
        <S.Container
          onClick={() => clickHandler(item.id)}
          key={item.id}
          small={small}
        >
          <S.Main>
            <S.Poster
              small={small}
              src={item.posterData === null ? defaultImg : item.posterData}
              onError={errorHandler}
              alt=""
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
