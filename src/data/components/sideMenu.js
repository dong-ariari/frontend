import EyeIcon from "../../assets/images/eyes.png";
import HeartIcon from "../../assets/images/green_heart.png";

export const SIDEMENU_DATA = [
  {
    id: 1,
    title: "둘러보기",
    imgPath: EyeIcon,
    uri: "/oncampus",
    variant: false,
  },
  {
    id: 2,
    title: "전체 동아리",
    imgPath: HeartIcon,
    uri: "/offcampus",
    variant: false,
  },
  {
    id: 3,
    title: "나의 동아리",
    imgPath: EyeIcon,
    uri: "/all",
    variant: false,
  },
];
