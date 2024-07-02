import Banner from "../components/banner/banner";
import { BANNER_DATA, BANNER_DATA2 } from "../data/components/banner.jsx";
import Badge from "../components/badge/badge";
import Footer from "../components/footer/footer";
import SideMenu from "../components/sideMenu/sideMenu";
import SideMenuComponent from "../components/sideMenu/sideMenuComponent";
import { SIDEMENU_DATA } from "../data/components/sideMenu";
import MailAlert from "../components/mailAlert/mailAlert.jsx";

const All = () => {
  return (
    <div>
      <MailAlert placeholder={"메일을 성공적으로 보냈어요!"} />
    </div>
  );
};

export default All;
