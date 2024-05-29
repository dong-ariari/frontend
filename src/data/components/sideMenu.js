import EyeIcon from "../../assets/images/eyes.png";
import HeartIcon from "../../assets/images/green_heart.png";
import SearchIcon from '../../assets/images/search.png';
import PostCardIcon from '../../assets/images/post.png';
import LetterIcon from '../../assets/images/letter.png';
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
    imgPath: SearchIcon,
    uri: "/offcampus",
    variant: false,
  },
  {
    id: 3,
    title: "나의 동아리",
    imgPath: HeartIcon,
    uri: "/all",
    variant: false,
  },
  {
    id: 4,
    title: "동아리 등록하기",
    imgPath: PostCardIcon,
    uri: "/",
    variant: false,
  },
  {
    id: 5,
    title: "동아리 모집하기",
    imgPath: LetterIcon,
    uri: "/",
    variant: false,
  },
];
