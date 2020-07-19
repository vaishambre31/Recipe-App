import React from 'react'
import styled from "styled-components";

const Ingredients = ({ name, id }) => {
    return (
        <ViewText>
            <Name>{`[${Number(id) + 1}]   ${name.toUpperCase()}`}</Name>
        </ViewText>
    )
}

const ViewText = styled.View`
    margin-left : 15px;
    margin-right : 15px;
    margin-top : 5px;
`

const Name = styled.Text`
    
`

export default Ingredients
