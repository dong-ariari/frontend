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
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </S.StyledSelect>
    </S.SelectContainer>
  );
};

export default Select;
