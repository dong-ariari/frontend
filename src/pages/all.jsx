import Banner from "../components/banner/banner";
import { BANNER_DATA, BANNER_DATA2 } from "../data/components/banner";
const All = () => {
  return (
    <div style={{ backgroundColor: "#d4d4d4", display: "flex",flexDirection: 'column', gap: "30px" }}>
      <div>all</div>
      <Banner data={BANNER_DATA} />
      <Banner data={BANNER_DATA2} />
    </div>
  );
};

export default All;
