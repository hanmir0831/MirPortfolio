import styled, {css, keyframes} from "styled-components";

interface pageProps {
    isFlipped: boolean;
    pageNum: number
}

const flipKeyframes = keyframes<pageProps>`
  0% {
    transform: perspective(3000px) rotateY(0deg);
  }
  50% {
    z-index: ${(props: pageProps) => props.pageNum};
  }
  100% {
    transform: perspective(3000px) rotateY(-180deg);
  }
`

export const Container = styled.div<pageProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 740px;
  height: 1050px;
  border-radius: 16px;
  background-color: #ffffff;
  box-shadow: 0 1px 1px rgba(0,0,0,0.08),
  0 2px 2px rgba(0,0,0,0.12),
  0 4px 4px rgba(0,0,0,0.16),
  0 8px 8px rgba(0,0,0,0.20);
  z-index: ${(props: pageProps) => props.isFlipped ? 2 : 100};

  transform-origin: left;
  animation: ${(props: pageProps) => props.isFlipped && css`${flipKeyframes} 2s 0s forwards`};
  -webkit-animation: ${(props: pageProps) => props.isFlipped && css`${flipKeyframes} 2s 0s forwards`};
  -moz-animation: ${(props: pageProps) => props.isFlipped && css`${flipKeyframes} 2s 0s forwards`};
`
