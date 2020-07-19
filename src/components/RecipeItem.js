import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import Colors from '../constants/Colors'

const RecipeItem = ({ receipe, navigation }) => {

    return (
        <TouchableOpacity onPress={() => navigation.navigate('recipes_details', {
            recipe_id: receipe.id
        })}>
            <Card>
                <Label>
                    {receipe.vegan ? 'Vegan' : 'Non-vegan'}
                </Label>
                <ImageContainer>
                    <Image source={{ uri: receipe.image }} resizeMode="cover" />
                </ImageContainer>
                <RecipeView>
                    <Name numberOfLines={1}>
                        {receipe.title}
                    </Name>
                    <SubName>Health Score : {receipe.healthScore}</SubName>
                    <SubName>Duration : {receipe.readyInMinutes} mins</SubName>
                </RecipeView>
            </Card>
        </TouchableOpacity>
    )
}



const Card = styled.View`
    /* border-width : 1px; */
    margin : 8px;
    /* border-radius : 10px; */
    border-top-right-radius : 20px;
    border-bottom-left-radius : 20px;
    flex-direction : row;
    padding : 5px;
    background-color : ${"#e6d8d8"};

`;

const Label = styled.Text`
    position : absolute;
    top : 0;
    right : 0;
    padding-right : 10px;
    padding-left : 10px;
    font-size : 14px;
    background-color : ${Colors.colorDanger};
    border-top-right-radius : 10px;
    border-bottom-left-radius : 10px;
    color : ${Colors.colorWhite}
`

const ImageContainer = styled.View`
    width: 60px;
    height: 60px;
    overflow: hidden;
    margin-top : 12px;
    margin-bottom : 12px;
    /* border-width :1;
    border-color : red; */
    border-radius : 50px;
`;

const Image = styled.Image`
    width: 100%;
    height: 100%;
`;

const RecipeView = styled.View`
    flex : 1;
    margin-left : 10px;
    margin-right : 10px;
    margin-top : 12px;
    margin-bottom : 12px;
    font-weight : bold;
    /* border-width : 1px; */
    /* flex-grow : 1 */
`;

const Name = styled.Text`
    font-size : 16px;
    font-weight : bold
`;

const SubName = styled.Text`
    font-size : 14px;
    letter-spacing : 1px;
    color : ${Colors.colorAccent}
`;


export default RecipeItem
