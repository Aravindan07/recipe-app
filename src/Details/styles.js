import styled from 'styled-components';


export const DetailsWrapper = styled.div`
    width: 65%;
    height: 560px;
    // background: #345678;
    margin: 50px auto auto auto;
`;

export const BackArrowDiv = styled.div`
    margin-top: 40px;
`;

export const ArrowDiv = styled.div`
    margin-right: 10px;
    cursor: pointer;
`;

export const ContentDiv = styled.div`
    display: flex;
    width: 100%;
    height: 100%;

`;

export const Div1 = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    padding: 10px;
`;

export const Div2 = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    h2{
        position: absolute;
        right: 15%;
    }
`;

export const VideoDiv = styled.div`
    width:100%;
    height: 200px;
    border-radius: 10px;
    opacity: 0.25;
    img{
        width: 100%;
        height: 100%;
    }
`;

export const Para = styled.p`
    font-size: 14px;
    letter-spacing: 0.3px;
`;

export const FeedBack = styled.div`
    background: #ffffff;
    width: fit-content;
`;

// export const Content = styled.div`
//     width: 100%;
// `;