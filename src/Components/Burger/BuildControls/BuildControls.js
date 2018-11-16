import React from 'react';
import styled from 'styled-components';
import BuildControl from './BuildControl';

const BuildControls = styled.div`
    width: 100%;
    background-color: #CF8F2E;
    display: flex;
    flex-flow: column;
    align-items: center;
    box-shadow: 0 2px 1px #ccc;
    margin: auto;
    padding: 10px 0;
`;

const controls = [
    {label: "Salad", type:"salad"},
    {label: "Bacon", type:"bacon"},
    {label: "Cheese", type:"cheese"},
    {label: "Meat", type:"meat"}
];

const buildControls = (props) => (
    <BuildControls>
        <p>Current Price: {props.currentPrice.toFixed(2)}</p>
        {controls.map(ctrl=> (
            <BuildControl disabled={props.disabled[ctrl.type]} clickRemove={()=> props.clickRemove(ctrl.type)} clickAdd={()=> props.clickAdd(ctrl.type)} key={ctrl.label} label={ctrl.label}/>
        ))}
    </BuildControls>
);

export default buildControls;