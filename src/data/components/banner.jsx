import { Highlight } from "../../components/banner/banner.styles";

export const BANNER_DATA = {
  title: (
    <>
      아리아리 <br />
      동아리 등록 신청서
    </>
  ),
  lists: [
    { id: 0, text: <>동아리 신청 후 등록까지 약 <Highlight>3일</Highlight>이 걸려요.</> },
    { id: 1, text: <>동아리 등록이 완료되면 모집 글을 작성할 수 있어요.</> },
    { id: 2, text: <>완료 시 메세지로 알려드려요.</> },
  ],
};

export const BANNER_DATA2 = {
  title: (
    <>
      아리아리
      <br />
      동아리 모집 신청서
    </>
  ),

  lists: [
    { id: 0, text: <>동아리 모집 글을 작성할 수 있어요.</> },
    { id: 1, text: <>동아리에 대해 자세히 설명할 수록 지원율이 높아져요.</> },
    { id: 2, text: <>지원자는 동아리 활동에 대해 가장 궁금해해요.</> },
  ],
};
