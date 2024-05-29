import Badge from "../components/badge/badge";
import Banner from "../components/banner/banner";
import SideMenu from "../components/sideMenu/sideMenu";
import SideMenuComponent from "../components/sideMenu/sideMenuComponent";
import { BANNER_DATA, BANNER_DATA2 } from "../datas/banner";
import banner from "../assets/dummy/image.png";
const All = () => {
  return (
    <div style={{ backgroundColor: "#d4d4d4" }}>
      <div>all</div>
      <Banner data={BANNER_DATA} />
      <Banner data={BANNER_DATA2} />
      <img style={{ width: "814px" }} src={banner} alt="" />
    </div>
  );
};

export default All;
