import React, { useState } from "react";
import * as S from "./textarea.styels";

const Textarea = ({ title, placeholder, isEdit }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    console.log("Input value:", e.target.value);
    if (e.target.value.length <= 500) {
      setValue(e.target.value);
    }
  };

  return (
    <S.TextContainer>
      <S.Title>{title}</S.Title>
      <S.TextAreaContainer>
        <S.Textarea
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          readOnly={!isEdit}
          isEditable={isEdit}
          maxLength="500"
        />
        <S.CharCounter textLength={value.length}>
          {value.length} &nbsp;<S.Counter>/ 500</S.Counter>
        </S.CharCounter>
      </S.TextAreaContainer>
    </S.TextContainer>
  );
};

export default Textarea;
