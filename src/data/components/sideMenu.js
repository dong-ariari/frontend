import EyeIcon from "../../assets/icons/eyes.svg";
import GlassIcon from '../../assets/icons/magnifying-glass.svg';
import HeartIcon from "../../assets/icons/green-heart.svg";
import LetterIcon from '../../assets/icons/love-letter.svg';
import MemoIcon from '../../assets/icons/memo.svg';
import StarIcon from '../../assets/icons/star.svg';



export const MAIN_SIDEMENU_DATA = [
  {
    id: 1,
    title: "둘러보기",
    imgPath: EyeIcon,
    uri: "/explore",
    variant: false,
  },
  {
    id: 2,
    title: "전체 동아리",
    imgPath: GlassIcon,
    uri: "/all",
    variant: false,
  },
  {
    id: 3,
    title: "나의 동아리",
    imgPath: HeartIcon,
    uri: "/",
    variant: false,
  },
  {
    id: 4,
    title: "동아리 등록하기",
    imgPath: LetterIcon,
    uri: "/register",
    variant: false,
  },
  {
    id: 5,
    title: "동아리 모집하기",
    imgPath: MemoIcon,
    uri: "/",
    variant: false,
  },
  {
    id: 6,
    title: "즐겨찾기",
    imgPath: StarIcon,
    uri: "/favorites",
    variant: false,
  },
];
