import React from 'react';
import Aux from '../../hoc/Aux';
import styled from 'styled-components';

const Main = styled.main`
    margin: 30px;
`;



const layout = (props) => (

    <Aux>
        <div>Toolbar,Sidebar,Backdrop</div>
        <Main>
            {props.children}
        </Main>
    </Aux>
);

export default layout;
