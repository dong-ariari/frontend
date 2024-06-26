import * as S from "./cards.styles";
import defaultImg from "../../assets/icons/defaultPoster.png";
export default function Cards({ small, badge, data, onClick, carousel }) {
  function errorHandler(e) {
    e.currentTarget.src = defaultImg;
    console.log(e.currentTarget.src);
  }
  return (
    <S.Layer $carousel={carousel}>
      {data.map((item) => (
        <S.Container
          onClick={() => onClick(item.id)}
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
              {badge && <S.Badge>Badge</S.Badge>}
            </S.Box>
          </S.Main>
          <S.Text>{item.recruitText}</S.Text>
        </S.Container>
      ))}
    </S.Layer>
  );
}
