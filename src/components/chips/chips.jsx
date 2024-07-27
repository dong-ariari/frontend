import { useNavigate } from "react-router-dom";
import * as S from "./chips.styles";
import { useState } from "react";

const Chips = ({ data, onChipClick }) => {
  const [chipsData, setChipsData] = useState(data);
  function handleChipsClick(id) {
    const newChipsData = chipsData.map((item) => {
      return { ...item, variant: item.id === id };
    });

    setChipsData(newChipsData);
    onChipClick(id);
  }

  return (
    <>
      <S.Container>
        {chipsData.map((item) => (
          <S.Title
            $variant={item.variant}
            key={item.id}
            onClick={() => handleChipsClick(item.id)}
          >
            {item.content}
          </S.Title>
        ))}
      </S.Container>
    </>
  );
};

export default Chips;
