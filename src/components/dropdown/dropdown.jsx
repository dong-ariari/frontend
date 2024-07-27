import * as S from "./dropdown.styles";
import dropBtn from "../../assets/icons/dropBtn.svg";
import dropBtnA from "../../assets/icons/dropBtn-a.svg";
export default function DropDown({
  title,
  handleSpread,
  handleSelect,
  spreadData,
  active, 
  isOpen, 
  selected,
  isBig,
}) {
  console.log(selected)
  return (
    <S.Container>
      <S.Head
        $isBig={isBig}
        $active={active}
        $isOpen={isOpen}
        onClick={handleSpread}
      >
        <S.Text>{selected ? selected.text : title}</S.Text>

        <img src={active ? dropBtnA : dropBtn} />
      </S.Head>
      <S.Dropdown $isOpen={isOpen}>
        {spreadData &&
          isOpen &&
          spreadData.map((item) => (
            <S.Spread onClick={() => handleSelect(item)} key={item.id}>
              {item.text}
            </S.Spread>
          ))}
      </S.Dropdown>
    </S.Container>
  );
}
