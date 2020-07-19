import React from 'react'
import styled from "styled-components";

import Colors from "../constants/Colors";
import RecipeList from '../components/RecipeList';

const RecipesScreen = ({ navigation }) => {
    return (
        <Container>
            <RecipeList navigation={navigation} />
        </Container>
    )
}

const Container = styled.View`
    flex : 1;
    background-color : ${Colors.colorWhite};
`;

export default RecipesScreen
