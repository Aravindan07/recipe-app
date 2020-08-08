import React from 'react';
import {ReactSVG} from 'react-svg';
import Background from '../components/background';
import SearchIcon from '../Images/searchicon.svg';
import BackgroundImage from '../Images/Img1.jpg';
import PlayIcon from '../Images/Icon ionic-ios-play-circle.png';
import BackArrow from '../Images/gobackicon.svg';
import {SearchDiv,SearchIconDiv,Input} from '../Homepage/styles';
import {DetailsWrapper,BackArrowDiv,ArrowDiv,ContentDiv,Div1,Para,VideoDiv,Div2,FeedBack} from './styles';

function Details(props){

    const onClickHandler = () => {
        props.history.push('/');
    }
    return (
        <>
            <Background />
            <DetailsWrapper>
            <SearchDiv>
                        <SearchIconDiv>
                            <ReactSVG src={SearchIcon} />
                        </SearchIconDiv>
                        <Input type="text" placeholder="Search your favourite recipe..." />
               </SearchDiv>
               <BackArrowDiv>
               <SearchDiv>
                   <ArrowDiv onClick={onClickHandler}>
               <ReactSVG  src={BackArrow}/>
               </ArrowDiv>
               Go Back
               </SearchDiv>
               </BackArrowDiv>
               <ContentDiv>
                   <Div1>
                        <VideoDiv>
                            <img src={BackgroundImage} alt="background"/>
                            <ReactSVG src={PlayIcon} />
                        </VideoDiv>
                        <h2>Ingredients :</h2>
                   <Para>
                       Lorem ipsum dollar sit amet,Lorem ipsum dollar sit amet;Lorem ipsum dollar sit amet,
                   Lorem ipsum dollar sit amet,Lorem ipsum dollar sit amet,Lorem ipsum dollar sit amet,
                   Lorem ipsum dollar sit amet,Lorem ipsum dollar sit amet,Lorem ipsum dollar sit amet,
                   Lorem ipsum dollar sit amet,Lorem ipsum dollar sit amet,Lorem ipsum dollar sit amet,
                   Lorem ipsum dollar sit amet,Lorem ipsum dollar sit amet,Lorem ipsum dollar sit amet,
                   Lorem ipsum dollar sit amet,Lorem ipsum dollar sit amet,Lorem ipsum dollar sit amet.
                   </Para>
                   <h2>How to Prepare:</h2>
                   <Para>
                   Lorem ipsum dollar sit amet,Lorem ipsum dollar sit amet;Lorem ipsum dollar sit amet,
                   Lorem ipsum dollar sit amet,Lorem ipsum dollar sit amet,Lorem ipsum dollar sit amet,
                   Lorem ipsum dollar sit amet,Lorem ipsum dollar sit amet,Lorem ipsum dollar sit amet,
                   Lorem ipsum dollar sit amet,Lorem ipsum dollar sit amet,Lorem ipsum dollar sit amet,
                   Lorem ipsum dollar sit amet,Lorem ipsum dollar sit amet,Lorem ipsum dollar sit amet,
                   Lorem ipsum dollar sit amet,Lorem ipsum dollar sit amet,Lorem ipsum dollar sit amet.
                   </Para>
                   </Div1>
                   <Div2>
                       <h2>Cheese Busters</h2>
                   </Div2>
                   {/* <hr />
                   <FeedBack>
                       YOUR FOOD TASTES YUMMY
                   </FeedBack> */}
               </ContentDiv>
               </DetailsWrapper>
        </>
    )
}

export default Details;