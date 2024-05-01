import React, { useState } from "react";
import * as S from "./input.styles";

const Input = ({ title, placeholder, isEdit }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <S.InputContainer>
      <S.Title>{title}</S.Title>
      <S.StyledInput
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        readOnly={!isEdit}
        isEditable={isEdit}
      />
    </S.InputContainer>
  );
};

export default Input;
