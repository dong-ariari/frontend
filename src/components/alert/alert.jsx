import * as S from "./alert.styles";
import triangle from '../../assets/images/triangle.svg';


export function Alert({ data }) {
  function handleClick() {
    // mote to its reference
  }
  return (
    <S.Layer>
      <img src={triangle} alt="" />
      <S.Container>
        {data.map((item) => (
          <S.Item onClick={()=>handleClick(item.id)} key={item.id}>
            <div>{item.alertType}</div>
            <div>@{item.from}</div>
            <div>{item.text}</div>
          </S.Item>
        ))}
      </S.Container>
    </S.Layer>
  );
}
