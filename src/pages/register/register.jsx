import Banner from "../../components/banner/banner";
import ImageSlot from "../../components/imageSlot/imageSlot";
import Input from "../../components/input/input";
import Select from "../../components/select/select";
import Textarea from "../../components/textarea/textarea";
import { REGISTER_BANNER } from "../../data/components/banner";
import MainLayout from "../../layouts/mainLayout/mainLayout";
import * as S from "./register.styles";
import Button from "../../components/button/button";

export default function Register() {
  return (
    <MainLayout>
      <S.Layer>
        <Banner data={REGISTER_BANNER} />
        <S.Container>
          <S.Title>기본 정보</S.Title>
          <ImageSlot title="대표 이미지" />
          <S.Form>
            <Input
              title="동아리 이름"
              placeholder="동아리 이름을 입력해주세요"
              isEdit={true}
              onValueChange={(value) => {
                console.log(value);
              }}
            />
            <Select
              title="동아리 분류"
              placeholder="분류를 선택해주세요"
              options={[
                { index: 1, label: "학술", value: "1" },
                { index: 2, label: "예술", value: "2" },
                { index: 3, label: "체육", value: "3" },
                { index: 4, label: "봉사", value: "4" },
                { index: 5, label: "기타", value: "5" },
              ]}
              isEdit={true}
              onValueChange={(value) => {
                console.log(value);
              }}
            />
            <Select
              title="학교 선택"
              placeholder="학교를 선택해주세요"
              options={[]}
              isEdit={true}
              onValueChange={(value) => {
                console.log(value);
              }}
            />
            <Select
              title="동아리 소속"
              placeholder="소속을 선택해주세요"
              options={[]}
              isEdit={true}
              onValueChange={(value) => {
                console.log(value);
              }}
            />
            <Select
              title="활동 분야"
              placeholder="활동 분야를 선택해주세요"
              options={[]}
              isEdit={true}
              onValueChange={(value) => {
                console.log(value);
              }}
            />
          </S.Form>

          <S.Title>동아리 소개</S.Title>

          <S.Box>
            <Textarea
              title="소개글"
              placeholder="동아리 소개를 입력해주세요"
              isEdit={true}
              max={100}
              onValueChange={() => {}}
            />
            <Button title="제출하기" onClick={()=>{console.log('submit');}} />
          </S.Box>
        </S.Container>
      </S.Layer>
    </MainLayout>
  );
}
