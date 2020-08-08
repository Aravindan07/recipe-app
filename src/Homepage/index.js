import React,{useState,useEffect} from 'react';
import {ReactSVG} from 'react-svg';
import SearchIcon from '../Images/searchicon.svg';
import HeartIcon from '../Images/Icon feather-heart-color.png';
import {
    HomepageContent,SearchDiv,SearchIconDiv,Input,CategoryDiv,
    RecipeWrapper,RecipeCard,CardImgDiv,CardDescDiv,Name,Label
} from './styles';
import Background from '../components/background'; 

function HomePage(props){

    const [data,setData] = useState([])

    useEffect(()=>{
        fetch('http://starlord.hackerearth.com/recipe')
        .then(response =>{
            return response.json();
        })
        .then(resData => {
            console.log(resData);
            return setData(resData);
        })
        .catch(error => {
            console.log(error);
        })
    },[])

    const onClickHandler = () =>{
        props.history.push('/details');
    }

    return (
        <>
        <Background />
           <HomepageContent>
               <SearchDiv>
                        <SearchIconDiv>
                            <ReactSVG src={SearchIcon} />
                        </SearchIconDiv>
                        <Input type="text" placeholder="Search your favourite recipe..." />
               </SearchDiv>
               <CategoryDiv>
                <span>CATEGORY</span><br/>
                <h1>Pizza and Noodles</h1>
                </CategoryDiv>
                <RecipeWrapper>
                {data.map(recipe=>(
                     <RecipeCard key={recipe.id} onClick={onClickHandler}>
                     <CardImgDiv>
                     <img src={recipe.image} alt="pizza" />
                     </CardImgDiv>
                     <CardDescDiv>
                         <Name>{recipe.name}</Name>
                         <img src={HeartIcon} alt="like" />
                         <p>{recipe.description}</p>
                        <Name>$ {recipe.price}</Name>
                     </CardDescDiv>
                 </RecipeCard>
                ))}
               </RecipeWrapper>
           </HomepageContent>
        </>
    )
}

export default HomePage;