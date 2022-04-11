import React from "react";
import {
    Column1,
    Column2,
    Heading,
    HomeContainer,
    HomeRow,
    HomeWrapper, Img, ImgWrap,
    Subtitle,
    TextWrapper,
    TopLine
} from "./HomeElements";
import Photo from "../../png/photo1.png";


const Home = () => {
    return (
        <HomeContainer>
            <HomeWrapper>
                <HomeRow>
                    <Column1>
                        <TextWrapper>
                            <TopLine>Lorem Ipsum</TopLine>
                            <Heading>Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum</Heading>
                            <Subtitle>Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
                                IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
                                IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
                                IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum</Subtitle>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={Photo}/>
                        </ImgWrap>
                    </Column2>
                </HomeRow>
                <HomeRow>
                    <Column2>
                        <TextWrapper>
                            <TopLine>Lorem Ipsum</TopLine>
                            <Heading>Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum</Heading>
                            <Subtitle>Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
                                IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
                                IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
                                IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum</Subtitle>
                        </TextWrapper>
                    </Column2>
                    <Column1>
                        <ImgWrap>
                            <Img src={Photo}/>
                        </ImgWrap>
                    </Column1>
                </HomeRow>
            </HomeWrapper>
        </HomeContainer>

    );
};


export default Home;