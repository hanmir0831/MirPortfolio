import React from "react";
import {Container} from "./smallStar.style.ts";

export interface Props {
    top: number;
    left: number;
}

const SmallStar: React.FC<React.PropsWithChildren<Props>> = (props) => {
    const {top, left} = props;

    return (
        <Container top={top} left={left}/>
    )
}

export default SmallStar
