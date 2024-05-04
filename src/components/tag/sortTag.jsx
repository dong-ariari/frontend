import { useState } from "react";
import * as S from "./sortTag.styles";

export default function SortTag({ data, onSelectChange }) {
   
  const [sortTagData, setSortTagData] = useState(data);
  function handleSelected(id) {
    const updatedData = sortTagData.map((item) => ({
      
      ...item,
      select: id === item.id ? true: item.select,
    }));
    setSortTagData(updatedData);
    onSelectChange(updatedData); 
  }
  return (
    <S.Layer>
      {sortTagData.map((item) => (
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
