import React from "react";
import * as S from "./imageSlot.styles";
import defaultImg from "../../assets/icons/defaultPoster.png";

const ImageSlot = ({ title, image }) => {
  const handleImageError = (e) => {
    e.target.src = defaultImg;
  };

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.ImageSection>
        <S.Image
          src={image || defaultImg}
          alt={title}
          onError={handleImageError}
        />
      </S.ImageSection>
    </S.Container>
  );
};

export default ImageSlot;
