import React, { useState } from "react";
import * as S from "./select.styles";

const Select = ({ title, placeholder, options }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <S.SelectContainer>
      <S.Title>{title}</S.Title>
      <S.StyledSelect
        value={value}
        onChange={handleChange}
        // defaultValue=""
      >
        <S.Option value="" disabled hidden>
          {placeholder}
        </S.Option>
        {options.map((option, index) => (
          <S.OptionLabel key={index} value={option.value}>
            {option.label}
          </S.OptionLabel>
        ))}
      </S.StyledSelect>
    </S.SelectContainer>
  );
};

export default Select;
