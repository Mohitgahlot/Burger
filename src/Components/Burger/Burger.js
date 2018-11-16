import React from 'react';
import styled from 'styled-components';
import BurgerIngrediant from './BurgerIngrediant/BurgerIngrediant';

const Burger = styled.div`
    width: 40%;
    margin: auto;
    height: 300px;
    overflow: scroll;
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    
    @media (max-width: 1000px) and (min-height: 700px){
        width: 700px;
        height: 600px;
    }
    
    
    @media (max-width: 500px) and (min-height: 401px){
        width: 450px;
        height: 400px;
    }
    
     @media (max-width: 500px) and (min-height: 400px){
        width: 350px;
        height: 300px;
    }
    
    
`;
const burger = (props) => {
    const transformIngrediants = Object.keys(props.ingrediants).map(igkey=>{
        return[...Array(props.ingrediants[igkey])].map((_,i)=>{
            return <BurgerIngrediant key={igkey+i} type={igkey}/>;
        });
    });
    return(
        <Burger>
            <BurgerIngrediant type="bread-top"/>
            {transformIngrediants}
            <BurgerIngrediant type="bread-bottom"/>
        </Burger>
    );
};

export default burger;