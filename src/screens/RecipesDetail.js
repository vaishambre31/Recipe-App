import React, { useEffect } from 'react'
import { ScrollView } from 'react-native'
import styled from 'styled-components';

import { Get_Recipe } from '../store/actions/RecipesActions';
import Colors from "../constants/Colors";
import Tag from '../components/Tag';
import useApi from '../hooks/useApi';
import Ingredients from '../components/Ingredients';

const RecipesDetail = ({ route }) => {

    const { recipe_id } = route.params;

    const getReducerState = state => state.Recipe;
    const { Request: GetRecipe, data, loading } = useApi(Get_Recipe, getReducerState)

    const { recipe } = data;

    useEffect(() => {
        GetRecipe(recipe_id);
    }, []);

    if (loading) return <Loader color={Colors.colorDanger} size="large" />

    return (
        <Container>
            {
                recipe !== null && (
                    <ScrollView>
                        <BackgroundImage blurRadius={1} source={{ uri: recipe.image }}>
                            <FirstSection>
                                <Title numberOfLines={2}>{recipe.title}</Title>
                                {
                                    recipe.diets.length !== 0 && (
                                        <DietSection>
                                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                                {
                                                    recipe.diets.map((item, index) => (
                                                        <Tag tagName={item} key={index} />
                                                    ))
                                                }
                                            </ScrollView>
                                        </DietSection>
                                    )
                                }
                                <Minutes>
                                    {`Ready In ${recipe.readyInMinutes} mins`}
                                </Minutes>
                            </FirstSection>
                        </BackgroundImage>

                        <SectionTitle>Instructions</SectionTitle>

                        <Instrctions>
                            {recipe.instructions}
                        </Instrctions>
                        {
                            recipe.extendedIngredients.length !== null && <>
                                <SectionTitle>Ingredients</SectionTitle>
                                {
                                    recipe.extendedIngredients.map((item, index) => (
                                        <Ingredients name={item.name} id={index} key={index} />
                                    ))
                                }
                            </>
                        }
                    </ScrollView>
                )
            }
        </Container>
    )
}

const Container = styled.View`
    flex : 1;
    background-color : ${Colors.colorWhite};
`

const BackgroundImage = styled.ImageBackground`
    height : 200px;
    opacity : 20;
`

const Loader = styled.ActivityIndicator`
    flex : 1;
`
const FirstSection = styled.View`
    height : 100%;
    width : 100%;
    padding : 20px;
`
const Title = styled.Text`
    font-size : 20px;
    font-weight : bold; 
    color : ${Colors.colorWhite};
    margin-top : 35px
`
const DietSection = styled.View`
    flex-direction : row;
    margin-top : 10px;
    margin-bottom : 10px;
`

const SectionTitle = styled.Text`
    letter-spacing : 1px;
    padding : 10px;
    font-size : 20px;
    font-weight : bold;
`

const Instrctions = styled.Text`
    letter-spacing : .5px;
    font-size : 14px;
    margin-left : 16px;
    margin-right : 16px;
`
const Minutes = styled.Text`
    font-size : 16px;
    font-weight : bold;
    color : ${Colors.colorAccent}
`

export default RecipesDetail
