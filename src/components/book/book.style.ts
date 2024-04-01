import styled from "styled-components";

export const BookBox = styled.div`
  position: relative;
  width: 740px;
  height: 1050px;
  background: linear-gradient(#121212 0%, #240066 70%, #f06553 95%, #fff474 5%);
  border-radius: 16px;
  overflow: hidden;
`

export const Land = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 70px;
  background-color: black;
`

export const TitleContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100%;
  height: 100%;
`

export const Title = styled.h1`

  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  
  font-size: 64px;
  font-weight: 600;
  color: floralwhite;
  margin-top: 200px;
  letter-spacing: 4px;
  font-family: Pretendard-Regular;
`
