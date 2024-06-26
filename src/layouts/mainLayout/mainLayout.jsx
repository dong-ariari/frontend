import * as S from './mainLayout.styles'; 

export default function MainLayout({ children }) {
  return (
    <>
      <S.Header />
      {children}
    </>
  );
}
