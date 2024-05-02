import React, { useState } from "react";
import * as S from "./toggleBtn.styles";

const ToggleBtn = ({ title, btnContent1, btnContent2, onToggle }) => {
  const [isSelected, setIsSelected] = useState(true);

  // btnContent1
  const handleBtn1Click = () => {
    setIsSelected(true);
    // api 명세서 픽스 후 수정 필요
    onToggle(btnContent1);
  };

  // btnContent2
  const handleBtn2Click = () => {
    setIsSelected(false);
    // api 명세서 픽스 후 수정 필요
    onToggle(btnContent2);
  };

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.BtnContainer>
        <S.BtnSection>
          <S.Btn onClick={handleBtn1Click} active={isSelected}>
            {btnContent1}
          </S.Btn>
          <S.Btn onClick={handleBtn2Click} active={!isSelected}>
            {btnContent2}
          </S.Btn>
        </S.BtnSection>
      </S.BtnContainer>
    </S.Container>
  );
};

export default ToggleBtn;
