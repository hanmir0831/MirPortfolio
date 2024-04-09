import {Container} from "./book.style.ts";
import React from "react";
import BookCover from "./Cover/BookCover.tsx";
import Page from "../Page/Page.tsx";


const Book: React.FC = () => {

    return (
        <Container>
            <BookCover/>
            <Page/>
        </Container>
    )
}

export default Book
