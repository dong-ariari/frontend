import * as S from "./alert.styles";
import triangle from "../../assets/images/triangle.svg";

export function Alert({ data }) {
  function handleClick(id) {
    // mote to its reference
    console.log(id);
  }
  return (
    <S.Layer>
      <S.Container $triangle={triangle}>
        {data.map((item) => (
          <S.Item onClick={() => handleClick(item.id)} key={item.id}>
            <div>{item.alertType}</div>
            <div>@{item.from}</div>
            <div>{item.text}</div>
          </S.Item>
        ))}
        <S.Button>알림 모두 보기</S.Button>
      </S.Container>
    </S.Layer>
  );
}
