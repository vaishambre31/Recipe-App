import React from 'react'
import styled from "styled-components";

import Colors from '../constants/Colors';

const Tag = ({ tagName }) => {
    return <Container>
        <TagTitle>{tagName}</TagTitle>
    </Container>
}

const TagTitle = styled.Text`
    font-size : 16px;
    color : ${Colors.colorAccent};
`

const Container = styled.Text`
    border-radius : 10px;
    background-color : ${Colors.colorWhite};
    margin-top : 10px;
    margin-bottom : 10px;
    margin-right : 10px;
    padding : 5px
`

export default Tag
