import SideMenu from "../components/sideMenu/sideMenu";
import SideMenuComponent from "../components/sideMenu/sideMenuComponent";
import { SIDEMENU_DATA } from "../data/components/sideMenu";

const All = () => {
  return (
    <div style={{ backgroundColor: "#d4d4d4" }}>
      <div>all</div>
      <SideMenuComponent data={SIDEMENU_DATA} />
    </div>
  );
};

export default All;
