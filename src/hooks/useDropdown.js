import { useState } from "react";

// 단일 드롭다운 생성
export const useDropDown = (title) => {
  const [active, setActive] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [spreadData, setSpreadData] = useState();

  const handleSpread = () => {
    if (active) {
      setIsOpen((prev) => !prev);
    }
  };

  const handleSelect = (item) => {
    setSelected(item);
    setIsOpen(false);
  };

  const isBig = title.length > 11;

  return {
    title: title,
    handleSpread,
    handleSelect,
    setSpreadData,
    setIsOpen,
    setActive,
    setSelected,
    isOpen,
    active,
    selected,
    spreadData,
    isBig,
  };
};
