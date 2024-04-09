import styled, {keyframes} from "styled-components";

const blink = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

interface Props {
    left: number;
    top: number;
}

export const Container = styled.div<Props>`
  position: relative;
  left: ${(props: Props) => props.left + "px"};
  top: ${(props: Props) => props.top + "px"};
  width: 3px;
  height: 3px;
  border-radius: 100%;
  background-color: lightyellow;

  animation: ${blink} 3s 3s ease-in infinite alternate;
  -webkit-animation: ${blink} 3s 3s ease-in infinite alternate;
  -moz-animation: ${blink} 3s 3s ease-in infinite alternate;
`
