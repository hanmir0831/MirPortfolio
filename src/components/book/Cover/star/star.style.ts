import styled, {keyframes} from "styled-components";

const blink = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

interface Props {
    left: number;
    top: number;
}

export const StarBox = styled.div<Props>`
  position: relative;
  left: ${(props: Props) => props.left + "px"};
  top: ${(props: Props) => props.top + "px"};

  animation: ${blink} 5s 0s ease-in-out infinite alternate;
  -webkit-animation: ${blink} 5s 0s ease-in-out infinite alternate;
  -moz-animation: ${blink} 5s 0s ease-in-out infinite alternate;
`

interface itemProps {
    size: number;
}

export const StarVertical = styled.div<itemProps>`
  position: absolute;
  width: ${(props: itemProps) => props.size + "px"};
  height: ${(props: itemProps) => props.size + "px"};
  background-color: #fce79a;
  border-radius: 8px;
  transform: rotate(67deg) skewX(45deg) scaleY(cos(45deg));
`

export const StarHorizontal = styled.div<itemProps>`
  position: absolute;
  width: ${(props: itemProps) => props.size + "px"};
  height: ${(props: itemProps) => props.size + "px"};
  background-color: #fce79a;
  border-radius: 8px;
  transform: rotate(-24deg) skewX(45deg) scaleY(cos(45deg));
`

