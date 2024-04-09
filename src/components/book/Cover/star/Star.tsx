import {StarBox, StarHorizontal, StarVertical} from "./star.style.ts";
import React from "react";

export interface Props {
    top: number;
    left: number;
    size: number;
}

const Star: React.FC<React.PropsWithChildren<Props>> = (props) => {
    const {top, left, size} = props;

    return (
        <StarBox top={top} left={left}>
            <StarVertical size={size}/>
            <StarHorizontal size={size}/>
        </StarBox>
    )
}

export default Star
