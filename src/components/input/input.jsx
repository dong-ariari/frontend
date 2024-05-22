import React, { useState } from "react";
import * as S from "./input.styles";

const Input = ({ title, placeholder, isEdit, onValueChange }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  return (
    <S.InputContainer>
      <S.Title>{title}</S.Title>
      <S.StyledInput
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        readOnly={!isEdit}
        data-iseditable={isEdit}
      />
    </S.InputContainer>
  );
};

export default Input;
