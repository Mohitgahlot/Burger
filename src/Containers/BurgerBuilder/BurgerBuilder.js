import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../Components/Burger/Burger';
import BurgerControls from '../../Components/Burger/BuildControls/BuildControls';


const INGREDIANT_PRICES = {
    salad: 0.5,
    bacon: 1.3,
    cheese: 0.25,
    meat: 1.0
};

class BurgerBuilder extends Component{


    state = {
        ingrediants:{
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4.0
    };



    addIngrediantHandler = (type) =>{
        const oldCount = this.state.ingrediants[type];
        const updatedCount = oldCount+1;
        const updateIngrediants = {
            ...this.state.ingrediants
        };
        updateIngrediants[type] = updatedCount;

        this.setState({ingrediants: updateIngrediants});
        const priceAddition  = INGREDIANT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice+priceAddition;
        this.setState({totalPrice: newPrice});
    };

    removeIngrediantHandler = (type) =>{
        const oldCount = this.state.ingrediants[type];
        if(oldCount>0) {
            const updatedCount = oldCount - 1;
            const updateIngrediants = {
                ...this.state.ingrediants
            };
            updateIngrediants[type] = updatedCount;

            this.setState({ingrediants: updateIngrediants});
            const priceDeduction = INGREDIANT_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - priceDeduction;
            this.setState({totalPrice: newPrice});
        }
    };
    render() {
        const disabledInfo={
            ...this.state.ingrediants
        };

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
         }
        return (
            <Aux>
                <Burger ingrediants={this.state.ingrediants}/>
                <BurgerControls currentPrice={this.state.totalPrice} disabled={disabledInfo} clickAdd={this.addIngrediantHandler} clickRemove={this.removeIngrediantHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;