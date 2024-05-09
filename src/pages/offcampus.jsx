import DropdownComponents from "../components/dropdown/dropdownComponents";
import Input from "../components/input/input";

const Offcampus = () => {
  return (
    <>
      <DropdownComponents />
      <div style={{ backgroundColor: "#ffe8fb", padding: 100 }}>
        <Input
          title={"동아리 이름"}
          placeholder={"동아리 이름을 입력해주세요"}
        />
        <Input title={"교내 동아리"} placeholder={"교내 동아리"} />
      </div>

      
      
    </>
  );
};

export default Offcampus;
