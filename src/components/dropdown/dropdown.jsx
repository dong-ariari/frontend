import { useEffect, useState } from "react";
import * as S from "./dropdown.styles";
import dropBtn from "../../assets/icons/dropBtn.png";
import dropBtnA from "../../assets/icons/dropBtn-a.png";
import { DUMMY_SPREAD } from "../../data/dummy/dropdown";
export default function DropDown() {
  const [selected, setSelected] = useState({
    depart: null,
    major: null,
  });
  const [spreadData, setSpreadData] = useState(null);
  const [isOpen, setIsOpen] = useState({ depart: false, major: false });

  useEffect(() => {
    // GET : school list
    setSpreadData(DUMMY_SPREAD);
  }, []);

  function handleDepartSpread() {
    const updated = { ...isOpen, depart: !isOpen.depart };
    setIsOpen(updated);
  }
  function handleDepartSelect(depart) {
    const updated = { depart: depart, major: null };
    setSelected(updated);
    handleDepartSpread();
  }
  function handleMajorSpread() {
    if (selected.depart) {
      const updated = { ...isOpen, major: !isOpen.major };
      setIsOpen(updated);
    }
  }
  function handleMajorSelect(major) {
    const updated = { ...selected, major: major };
    setSelected(updated);
    handleMajorSpread();
  }

  return (
    <S.Layer>
      <div>
        <S.Container>
          <S.Head
            $isOpen={isOpen.depart}
            $active={true}
            onClick={() => handleDepartSpread()}
          >
            <span>
              {selected.depart === null
                ? "단과대학을 선택해주세요"
                : selected.depart.text}
            </span>
            <img src={dropBtnA} />
          </S.Head>

          {spreadData &&
            isOpen.depart &&
            spreadData.depart.map((item) => (
              <S.Spread onClick={() => handleDepartSelect(item)} key={item.id}>
                {item.text}
              </S.Spread>
            ))}
        </S.Container>
      </div>
      <div>
        <S.Container>
          <S.Head
            $isOpen={isOpen.depart}
            $active={selected.depart !== null}
            onClick={() => handleMajorSpread()}
          >
            <span>
              {selected.major === null
                ? "학과를 선택해주세요"
                : selected.major.text}
            </span>
            <img src={dropBtn} />
          </S.Head>
          {spreadData &&
            isOpen.major &&
            spreadData.major.map((item) => {
              if (item.parentId === selected.depart.id) {
                return (
                  <S.Spread
                    onClick={() => handleMajorSelect(item)}
                    key={item.id}
                  >
                    {item.text}
                  </S.Spread>
                );
              }
            })}
        </S.Container>
      </div>
    </S.Layer>
  );
}
