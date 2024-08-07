import { useState } from "react";
import MiniSearch from "../components/miniSearch/miniSearch";
import Select from "../components/select/select";
import Toast from "../components/toast/toast";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  { value: "option4", label: "Option 4" },
];

const Oncampus = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div style={{ backgroundColor: "#ffe8fb", padding: 100 }}>
        <div
          onClick={() => {
            setVisible(true);
          }}
        >
          onCampus
        </div>
        <Toast setVisible={setVisible} visible={visible} placeholder={'메일을 성공적으로 보냈어요. 메일함을 확인해주세요!'}  />
      </div>
    </>
  );
};

export default Oncampus;
