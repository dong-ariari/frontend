import Badge from "../components/badge/badge";
import SideMenu from "../components/sideMenu/sideMenu";
import SideMenuComponent from "../components/sideMenu/sideMenuComponent";
import { SIDEMENU_DATA } from "../data/components/sideMenu";

const All = () => {
  return (
    <div style={{ backgroundColor: "#d4d4d4" }}>
      <div>all</div>
      <div style={{ padding: 20, backgroundColor: "#aad2e8" }}>
        <Badge title={"badge"} />
      </div>
      <SideMenuComponent data={SIDEMENU_DATA} />
    </div>
  );
};

export default All;
