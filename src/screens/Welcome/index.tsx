import React from 'react'
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/core'

import { SafeAreaViewContainer } from '../../components/design-system/containers'
import { Button } from '../../components/design-system/input'
import { SubTitle, Title } from '../../components/design-system/typography'

import { Feather } from '@expo/vector-icons'

import PetManagerImage from '../../../assets/petmanager.png'

export const WelcomeScreen = () => {
    const navigation = useNavigation()

    const handleStart = function () {
        navigation.navigate('UserIdentification')
    }

    return (
        <SafeAreaViewContainer>
            <Title>
                Retribua a{'\n'}atenção que seu{'\n'}pet te dá
            </Title>
            <HeroImage resizeMode="contain" source={PetManagerImage} />
            <SubTitle>
                O Pet Manager te ajuda a nunca mais esquecer de brincar, passear
                ou passar um bom momento com seus pets.
            </SubTitle>
            <Button activeOpacity={0.7} onPress={handleStart}>
                <Feather name="chevron-right" style={{ color: 'white' }} />
            </Button>
        </SafeAreaViewContainer>
    )
}

const HeroImage = styled.Image`
    min-height: 200px;
    width: 300px;
`
