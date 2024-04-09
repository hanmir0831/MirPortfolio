import {Container} from "./page.style.ts";
import React, {useCallback, useState} from "react";


interface Props {
    pageNum: number;
}

const Page: React.FC<Props> = (props: Props) => {
    const {pageNum} = props;
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClickNextPage = useCallback(() => {
        setIsFlipped(true);
    }, []);

    return (
        <Container isFlipped={isFlipped} pageNum={pageNum} onClick={handleClickNextPage}>
            {pageNum}
        </Container>
    )
}

export default Page
