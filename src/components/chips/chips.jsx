import { useNavigate } from "react-router-dom";
import * as S from "./chips.styles";

const Chips = ({ data }) => {
  const navigate = useNavigate();

  const handleChipsClick = (uri) => {
    console.log(uri);
    navigate(uri);
  };

  return (
    <>
      <S.Container>
        {data.map((item) => (
          <S.Title
            $variant={item.variant}
            key={item.id}
            onClick={() => handleChipsClick(item.uri)}
          >
            {item.content}
          </S.Title>
        ))}
      </S.Container>
    </>
  );
};

export default Chips;
