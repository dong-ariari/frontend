import * as S from "./cards.styles";
import defaultImg from "../../assets/icons/defaultPoster.png";
import star from "../../assets/images/star.svg";
export default function Cards({ small, badge, data, onClick, onRemoved, carousel }) {
  function errorHandler(e) {
    e.currentTarget.src = defaultImg;
    console.log(e.currentTarget.src);
  }
  return (
    <S.Layer $carousel={carousel} $small={small}>
      {data.map((item) => (
        <S.Container
          onClick={() => onClick(item.id)}
          key={item.id}
          $small={small}
        >
          <S.Main $small={small}>
            <S.Poster
              $small={small}
              src={item.posterData === null ? defaultImg : item.posterData}
              onError={errorHandler}
              alt=""
            />
            <S.Star onClick={()=>onRemoved(item.id)} src={star} />
          </S.Main>
          <S.Box>
              <S.Title>{item.clubName}</S.Title>
              {badge && <S.Badge>{item.badge}</S.Badge>}
            </S.Box>
          <S.Text>{item.recruitText}</S.Text>
        </S.Container>
      ))}
    </S.Layer>
  );
}
