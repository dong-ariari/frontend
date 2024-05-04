import * as S from "./alert.styles";

export function Alert({ data }) {
  return (
    <S.Layer>
      {data.map((item) => (
        <S.Item key={item.id}>
          <div>{item.alertType}</div>
          <div>@{item.from}</div>
          <div>{item.text}</div>
        </S.Item>
      ))}
    </S.Layer>
  );
}
