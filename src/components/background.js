import React from 'react';
import Illustration1 from '../Images/Illustration2.png';
import Illustration2 from '../Images/Illustration1.png';
import Illustration4 from '../Images/Illustration4.png';
import Illustration5 from '../Images/Illustration5.png';
import {ImageDiv,ImgDiv2,} from '../Homepage/styles';


function Background(){
    return (
        <>
        <ImageDiv>
            <img src={Illustration1} alt="side-pic" />
        </ImageDiv>
        <ImageDiv imgPlace="bottom">
            <img src={Illustration2} alt="bottom-pic" />
        </ImageDiv>
        <ImgDiv2>
            <img src={Illustration4} alt="side-pic" />
        </ImgDiv2>
        <ImgDiv2 imgPlace="bottom-right">
            <img src={Illustration5} alt="side-pic" />
        </ImgDiv2>
        </>
    )
}

export default Background;