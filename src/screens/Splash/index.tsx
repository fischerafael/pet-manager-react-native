import React from 'react'
import styled from 'styled-components/native'

import PetManager from '../../../assets/petmanager.png'

export const WelcomeScreen = () => {
    return (
        <Container>
            <Title>
                Retribua a{'\n'}atenção que seu{'\n'}pet te dá
            </Title>
            <CustomImage source={PetManager} />
            <SubTitle>
                O Pet Manager te ajuda a nunca mais esquecer de brincar, passear
                ou passar um bom momento com seus pets.
            </SubTitle>
            <Button activeOpacity={0.7}>
                <SubTitle>Entrar</SubTitle>
            </Button>
        </Container>
    )
}

const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: space-between;
    padding: 24px;
    padding-bottom: 48px;
    background: #222;
`
const Title = styled.Text`
    color: #fafafa;
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    padding-top: 32px;
`
const CustomImage = styled.Image`
    width: 300px;
    height: 210px;
`
const SubTitle = styled.Text`
    color: #fafafa;
    font-size: 16px;
    text-align: center;
    line-height: 24px;
`
const Button = styled.TouchableOpacity`
    background: #8ab4e5;
    border: none;
    align-items: center;
    justify-content: center;
    padding: 24px;
    border-radius: 16px;
    color: #fafafa;
`
