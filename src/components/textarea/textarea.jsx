import React, { useState } from "react";
import * as S from "./textarea.styels";

const Textarea = ({ title, placeholder }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <S.TextContainer>
      <S.Title>{title}</S.Title>
      <S.Textarea
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </S.TextContainer>
  );
};

export default Textarea;
