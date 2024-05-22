import { useState } from "react";

export const useDropDown = (title, initialActive = true) => {
  const [state, setState] = useState({
    active: initialActive,
    isOpen: false,
    selected: null,
  });

  const [spreadData, setSpreadData] = useState();

  const handleSpread = () => {
    if (state.active) {
      setState((prevState) => ({
        ...prevState,
        isOpen: !prevState.isOpen,
      }));
    }
  };

  const handleSelect = (item) => {
    setState({
      ...state,
      selected: item,
      isOpen: false,
    });
  };

  return {
    title: title,
    handleSpread,
    handleSelect,
    setSpreadData,
    setState, 
    state,
    spreadData,
  };
};

import { DUMMY_MAJOR0, DUMMY_MAJOR1 } from "../data/dummy/dropdown";

export const useDropDown2 = (title, title2) => {
  const dropdown1 = useDropDown(title);
  const dropdown2 = useDropDown(title2, false);

  const handleSpread = () => {
    if (dropdown1.state.active) {
      const updated = { ...dropdown1.state, isOpen: !dropdown1.state.isOpen };
      dropdown1.setState(updated);
    }
  };

  const handleSpread2 = () => {
    if (dropdown1.state.selected === null || !dropdown2.state.active) {
      return;
    }

    // GET
    if (dropdown1.state.selected.id === 0) {
      dropdown2.setSpreadData(DUMMY_MAJOR0);
    } else if (dropdown1.state.selected.id == 1) {
      dropdown2.setSpreadData(DUMMY_MAJOR1);
    }

    const updated = { ...dropdown2.state, isOpen: !dropdown2.state.isOpen };
    dropdown2.setState(updated);
  };

  const handleSelect = (item) => {
    const updated = { ...dropdown1.state, selected: item, isOpen: false };
    dropdown1.setState(updated);

    const updated2 = { ...dropdown2.state, active: true, selected: null };
    dropdown2.setState(updated2);
    dropdown2.setSpreadData(null);
  };

  const handleSelect2 = (item) => {
    const updated = { ...dropdown2.state, selected: item, isOpen: false };
    dropdown2.setState(updated);
  };

  return {
    dropdown: {
      ...dropdown1,
      handleSpread,
      handleSelect,
    },
    dropdown2: {
      ...dropdown2,
      handleSpread: handleSpread2,
      handleSelect: handleSelect2,
    },
  };
};
