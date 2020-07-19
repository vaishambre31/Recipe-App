import React, { useEffect } from 'react'
import { FlatList } from 'react-native'
import styled from "styled-components";

import { Get_Recipes } from '../store/actions/RecipesActions';
import Colors from '../constants/Colors';
import RecipeItem from './RecipeItem';
import useApi from '../hooks/useApi';
import ErrorHandler from './ErrorHandler';

const RecipeList = ({ navigation }) => {

    const getReducerState = state => state.Recipe;
    const { data, loading, Request: GetRecipes } = useApi(Get_Recipes, getReducerState);
    const { recipes, error } = data;

    useEffect(() => {
        GetRecipes();
    }, []);

    if (loading) return <Loader color={Colors.colorDanger} size="large" />

    if (error) return <ErrorHandler msg={error} onPress={GetRecipes} />

    return (
        <>
            {
                recipes.length !== 0
                    ? <FlatList
                        ListHeaderComponent={<TitleHeader>Popular Recipes</TitleHeader>}
                        keyExtractor={(item, index) => index.toString()}
                        data={recipes}
                        renderItem={({ item }) => (
                            <RecipeItem receipe={item} navigation={navigation} />
                        )} />
                    : <TitleHeader>No Records Found</TitleHeader>
            }
        </>
    )
}

export default RecipeList

const TitleHeader = styled.Text`
    font-size:18px;
    font-weight : bold;
    letter-spacing : 3px;
    padding : 10px;
    color : ${Colors.colorAccent}
`

const Loader = styled.ActivityIndicator`
    flex : 1;
`
