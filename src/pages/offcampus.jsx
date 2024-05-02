import ImageSlot from "../components/imageSlot/imageSlot";
import ImageVal from "../assets/images/루피.png";

const Offcampus = () => {
  return (
    <>
      <div style={{ backgroundColor: "#ffe8fb", padding: 100 }}>
        <ImageSlot title={"대표 이미지"} image={ImageVal} />
      </div>
    </>
  );
};

export default Offcampus;
