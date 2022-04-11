import React from "react";
import Photo from "../../png/photo1.png"
import {PhotoDiv, PhotoH1, PhotoH2, PhotoItem, PhotoP, PhotosContainer, PhotosWrapper} from "./PhotosElements";


const Photos = () => {
    return (<PhotosContainer id="photos">
        <PhotoH1> Obrazki </PhotoH1>
        <PhotoH1> </PhotoH1>
        <PhotosWrapper>
            <PhotoDiv>
                <PhotoItem src={Photo}/>
                <PhotoH2>Lore Impsum</PhotoH2>
                <PhotoP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</PhotoP>
            </PhotoDiv>
            <PhotoDiv>
                <PhotoItem src={Photo}/>
                <PhotoH2>Lore Impsum</PhotoH2>
                <PhotoP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</PhotoP>
            </PhotoDiv>
            <PhotoDiv>
                <PhotoItem src={Photo}/>
                <PhotoH2>Lore Impsum</PhotoH2>
                <PhotoP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</PhotoP>
            </PhotoDiv>
            <PhotoDiv>
                <PhotoItem src={Photo}/>
                <PhotoH2>Lore Impsum</PhotoH2>
                <PhotoP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</PhotoP>
            </PhotoDiv>
            <PhotoDiv>
                <PhotoItem src={Photo}/>
                <PhotoH2>Lore Impsum</PhotoH2>
                <PhotoP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</PhotoP>
            </PhotoDiv>
            <PhotoDiv>
                <PhotoItem src={Photo}/>
                <PhotoH2>Lore Impsum</PhotoH2>
                <PhotoP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</PhotoP>
            </PhotoDiv>
        </PhotosWrapper>

    </PhotosContainer>)
};

export default Photos