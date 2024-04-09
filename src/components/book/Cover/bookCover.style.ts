import styled, {keyframes, css} from "styled-components";

const flipKeyframes = keyframes`
  0% {
    transform: perspective(3000px) rotateY(0deg);
  }
  100% {
    transform: perspective(3000px) rotateY(-180deg);
  }
`

interface coverProps {
    isFlipped: boolean;
}

export const Container = styled.div<coverProps>`
  position: relative;
  width: 740px;
  height: 1050px;
  border-radius: 16px;
  box-shadow: 0 1px 1px rgba(0,0,0,0.08),
  0 2px 2px rgba(0,0,0,0.12),
  0 4px 4px rgba(0,0,0,0.16),
  0 8px 8px rgba(0,0,0,0.20);
  z-index: 1000;
  
  transform-origin: left;
  backface-visibility: hidden;
  animation: ${(props: coverProps) => props.isFlipped && css`${flipKeyframes} 2s 0s ease-in-out forwards`};
  -webkit-animation: ${(props: coverProps) => props.isFlipped && css`${flipKeyframes} 2s 0s ease-in-out forwards`};
  -moz-animation: ${(props: coverProps) => props.isFlipped && css`${flipKeyframes} 2s 0s ease-in-out forwards`};
`

export const BookBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(#121212 0%, #240066 70%, #f06553 95%, #fff474);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: inset 0 0 15px;
`

export const BookBackground = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(#121212 0%, #240066 70%, #f06553 95%, #fff474);
  border-radius: 16px;
  overflow: hidden;
  z-index: 1;
  box-shadow: inset 0 0 15px;
`

export const Land = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 70px;
  background-color: #000000;
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

export const Backface = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  transform: rotateY(180deg);
  box-shadow: inset 0 0 15px;
  box-sizing: border-box;
`

export const WhitePage = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border-radius: 8px;
`
