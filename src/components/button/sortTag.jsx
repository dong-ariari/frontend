import { useState } from "react";
import * as S from "./sortTag.styles";

export default function SortTag({ data }) {
  const [sortTagData, setSortTagData] = useState(data);
  function handleSelected(id) {
    const updatedData = sortTagData.map((item) => ({
      ...item,
      select: id === item.id,
    }));
    setSortTagData(updatedData);
  }
  return (
    <S.Layer>
      {data.map((item) => (
        <S.Container
          onClick={() => handleSelected(item.id)}
          $select={item.select}
          key={item.id}
        >
          {item.content}
        </S.Container>
      ))}
    </S.Layer>
  );
}
