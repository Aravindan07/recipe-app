import styled from 'styled-components';


export const ImageDiv = styled.div`
    position: fixed;
    right: ${props=> props.imgPlace === 'bottom' ? 'unset':'-275px'};
    bottom:${props =>props.imgPlace === 'bottom' ? '-60px': 'unset'};
    width: fit-content;
    top: ${props=> props.imgPlace === 'bottom' ? 'unset':'-100px'};
    left: ${props=> props.imgPlace === 'bottom' ? '-95px':'unset'};
    img{
        width:60%;
    }
`;

export const ImgDiv2 = styled.div`
position: fixed;
right: ${props=> props.imgPlace === 'bottom-right' ? '15px':'-120px'};
bottom: ${props=> props.imgPlace === 'bottom-right' ? '90px':'-30px'};
width: fit-content;
img{
    width:60%;
}
`;

export const HomepageContent = styled.div`
    margin: auto;
    width: 64%;
    // background: #feeffe;
    margin-top: 50px;
`;

export const SearchDiv = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 0px 0px 10px;
`;

export const SearchIconDiv = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background: #ffffff;
    margin-right: 10px;
    cursor: pointer;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.25);
    svg{
        margin: 8px 9px;
    }
`;

export const Input = styled.input`
    border: none;
    outline: none;
    width: 220px;
    height: 35px;
    font-size: 16px;
    background: #f0f0f0;
`;

export const CategoryDiv = styled.div`
    float: right;
    margin-top: 20px;
    padding-right: 20px;
    span{
        float: right;
        opacity: 0.25;
        font-size: 12px;
    }
    h1{
        margin: 10px 0px 20px 0px;
    }
`;

export const RecipeWrapper = styled.div`
    margin-top: 100px;
    padding-left: 40px;
`;

export const RecipeCard = styled.div`
    width: 300px;
    height: 400px;
    border-radius: 5px;
    background: #ffffff;
    display: inline-flex;
    flex-direction: column;
    margin: 20px 20px 0px 0px;
`;

export const CardImgDiv = styled.div`
    width:300px;
    height: 60%;
    img{
        width: 100%;
        height: 100%;
        border-radius: 10px 10px 0px 0px;
    }
`;

export const CardDescDiv = styled.div`
    height: 40%;
    border-radius: 0px 0px 10px 10px;
    background: #000000;
    color: #ffffff;
    padding:0px 10px;
    img{
        float: right;
        margin-top: -20px;
        margin-right: 10px;
    }
`;

export const Name = styled.div`
    margin-top: 15px;
    width: fit-content;
`;

