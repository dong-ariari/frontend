import React, { useState } from "react";
import * as S from "./toggleBtn.styels";

const ToggleBtn = ({ title, btnContent1, btnContent2 }) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.BtnContainer>
        <S.BtnSection>
          <S.Btn>{btnContent1}</S.Btn>
          <S.Btn>{btnContent2}</S.Btn>
        </S.BtnSection>
      </S.BtnContainer>
    </S.Container>
  );
};

export default ToggleBtn;
