import React from 'react'
import styled from 'styled-components'

import Colors from '../constants/Colors'

const ErrorHandler = ({ msg, onPress }) => {
    return (
        <Container>
            <ErrorMessage>
                {msg}
            </ErrorMessage>
            <Retry onPress={() => onPress()} title="Retry" />
        </Container>
    )
}

const Container = styled.View`
    flex : 1;
    align-items : center;
    justify-content : center;
    background-color : ${Colors.colorWhite};
`

const ErrorMessage = styled.Text`
    font-size : 20px;
    color : ${Colors.colorDanger};
    font-weight : bold;
`

const Retry = styled.Button`
    background-color : ${Colors.colorDanger};
    padding : 10px;
`

export default ErrorHandler
