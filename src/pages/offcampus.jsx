import Input from "../components/input/input";
import Search from "../components/search/search";

const Offcampus = () => {
  return (
    <>
      <div style={{ backgroundColor: "#ffe8fb", padding: 100 }}>
        <Input
          title={"동아리 이름"}
          placeholder={"동아리 이름을 입력해주세요"}
        />
        <Input title={"교내 동아리"} placeholder={"교내 동아리"} />
      </div>

      <div style={{ border: "solid 3px black", padding: "50px" }}>
        <Search
          placeholder="관심있는 동아리를 찾을 수 있어요"
          onSearch={(val) => {
            console.log(val);
          }}
        />
      </div>
    </>
  );
};

export default Offcampus;
