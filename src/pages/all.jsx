import MailAlert from "../components/mailAlert/mailAlert.jsx";
import { useState } from "react";

const All = () => {
  const [visible, setVisible] = useState(false);
  console.log(visible);

  return (
    <div>
      <MailAlert
        visible={visible}
        setVisible={setVisible}
        placeholder={"메일을 성공적으로 보냈어요!"}
      />
      <div
        onClick={() => setVisible(true)}
        style={{ width: "500px", backgroundColor: "pink", height: "300px" }}
      >
        dummy component
      </div>
    </div>
  );
};

export default All;
