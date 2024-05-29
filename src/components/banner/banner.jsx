import * as S from "./banner.styles";
import bg from "../../assets/images/banner.png";
import c1 from "../../assets/images/circle1.svg";
import c2 from "../../assets/images/circle2.svg";
import c3 from "../../assets/images/circle3.svg";
import c4 from "../../assets/images/circle4.svg";

export default function Banner({ data }) {
  const { title, title2, lists } = data;
  return (
    <S.Layer $url={bg}>
      <img src={c1}></img>
      <img src={c2}></img>
      <img src={c3}></img>
      <img src={c4}></img>

      <S.Title>
        {title}
        <br />
        {title2}
      </S.Title>
      <S.List>
        {lists.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </S.List>
    </S.Layer>
  );
}
