import {Backface, BookBox, Container, Land, Title, TitleContainer} from "./book.style.ts";
import Star from "./star/Star.tsx";
import React from "react";
import SmallStar from "./smallStar/SmallStar.tsx";


const Book: React.FC = () => {
    const starList: {top: number, left: number, size: number}[] = [
        {top: 100, left: 100, size: 10},
        {top: 200, left: 80, size: 25},
        {top: 350, left: 180, size: 20},
        {top: 100, left: 600, size: 18},
        {top: 80, left: 380, size: 7},
        {top: 170, left: 280, size: 8},
        {top: 240, left: 600, size: 24},
        {top: 150, left: 380, size: 17},
        {top: 90, left: 280, size: 15},
        {top: 230, left: 450, size: 13},
    ]

    const smallStarList: {top: number, left: number}[] = [
        {top: 25, left: 25},
        {top: 40, left: 150},
        {top: 55, left: 200},
        {top: 28, left: 500},
        {top: 29, left: 430},
        {top: 80, left: 170},
        {top: 280, left: 100},
        {top: 50, left: 550},
        {top: 45, left: 450},
        {top: 35, left: 650},
        {top: 415, left: 45},
        {top: 435, left: 95},
        {top: 50, left: 50},
        {top: 100, left: 150},
        {top: 350, left: 290},
        {top: 430, left: 240},
        {top: 200, left: 230},
        {top: 350, left: 430},
        {top: 120, left: 450},
        {top: 350, left: 280},
        {top: 50, left: 520},
        {top: 100, left: 620},
        {top: 150, left: 250},
        {top: 320, left: 300},
        {top: 325, left: 550},
        {top: 120, left: 690},
        {top: 170, left: 450},
        {top: 300, left: 600},
    ];

    const renderStar = () => {
        return starList.map(v => {
            return (
                <Star top={v.top} left={v.left} size={v.size}/>
            );
        });
    }

    const renderSmallStar = () => {
        return smallStarList.map(v => {
            return (
                <SmallStar top={v.top} left={v.left}/>
            );
        });
    }

    return (
        <Container>
            <BookBox>
                {renderStar()}
                {renderSmallStar()}
                <TitleContainer>
                    <Title>
                        Portfolio
                    </Title>
                </TitleContainer>
                <Land/>
            </BookBox>
            <Backface/>
        </Container>
    )
}

export default Book
