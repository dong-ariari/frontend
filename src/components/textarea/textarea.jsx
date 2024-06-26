import React, { useState } from "react";
import * as S from "./textarea.styles";

const Textarea = ({ title, placeholder, isEdit, max, onValueChange }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    if (!max || newValue.length <= max) {
      setValue(newValue);
      if (onValueChange) {
        onValueChange(newValue);
      }
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
          data-iseditable={isEdit}
          maxLength={max || undefined}
        />
        {max && (
          <S.CharCounter textLength={value.length}>
            {value.length} &nbsp;<S.Counter>/ {max}</S.Counter>
          </S.CharCounter>
        )}
      </S.TextAreaContainer>
    </S.TextContainer>
  );
};

export default Textarea;
