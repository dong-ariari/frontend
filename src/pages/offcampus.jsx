import Input from "../components/input/input";
import Textarea from "../components/textarea/textarea";
import ToggleBtn from "../components/toggleBtn/toggleBtn";

const Offcampus = () => {
  return (
    <>
      <div style={{ backgroundColor: "#ffe8fb", padding: 100 }}>
        <Input
          title={"동아리 이름"}
          placeholder={"동아리 이름을 입력해주세요"}
          isEdit={false}
        />
        <Input
          title={"교내 동아리"}
          placeholder={"교내 동아리"}
          isEdit={true}
        />
        <Textarea
          title={"소개글"}
          placeholder={"소개하고 싶은 내용을 입력해주세요"}
          isEdit={true}
        />
        <ToggleBtn
          title={"모집 현황"}
          btnContent1={"모집 중"}
          btnContent2={"모집 완료"}
        />
      </div>
    </>
  );
};

export default Offcampus;
