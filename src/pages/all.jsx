import Banner from "../components/banner/banner";
import { BANNER_DATA, BANNER_DATA2 } from "../data/components/banner.jsx";
import Badge from "../components/badge/badge";
import Footer from "../components/footer/footer";
import SideMenu from "../components/sideMenu/sideMenu";
import SideMenuComponent from "../components/sideMenu/sideMenuComponent";
import { SIDEMENU_DATA } from "../data/components/sideMenu";


const All = () => {
  return (
    <div style={{ backgroundColor: "#d4d4d4", display: "flex",flexDirection: 'column', gap: "30px" }}>
      <div>all</div>
      <Banner data={BANNER_DATA} />
      <Banner data={BANNER_DATA2} />
        
        <div style={{ padding: 20, backgroundColor: "#aad2e8" }}>
          <Badge title={"badge"} />
        </div>
        <SideMenuComponent data={SIDEMENU_DATA} />
        
        <Footer
        text={
          "(주) 캠퍼스크루 ㅣ 책임자: 김대선 ㅣ 등록일자: 2024년 1월 20일 ㅣ대표자: 원순재 ㅣ ALL RIGHTS RESERVED."
        }
        text2={
          "주소: 서울특별시 광진구 능동로 209, 세종대왕타워 2층 ㅣ 전화번호: 02-3408-3114 ㅣ 사업자번호 101-12-143298 ㅣ 이메일: daesun@gmail.com"
        }
      />
    </div>
  );
};

export default All;
