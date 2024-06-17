import EyeIcon from "../../assets/images/eyes.svg";
import HeartIcon from "../../assets/images/green_heart.svg";
import GlassIcon from '../../assets/images/glass.svg';
import LetterIcon from '../../assets/images/letter.svg';
import PencilIcon from '../../assets/images/pencil.svg';

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
    imgPath: GlassIcon,
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
    id: 3,
    title: "동아리 등록하기",
    imgPath: LetterIcon,
    uri: "/all",
    variant: false,
  },
  {
    id: 3,
    title: "동아리 모집하기",
    imgPath: PencilIcon,
    uri: "/all",
    variant: false,
  },
];
