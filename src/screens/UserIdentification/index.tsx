import React from 'react'
import styled from 'styled-components/native'

import {
    Container,
    SafeAreaViewContainer
} from '../../components/design-system/containers'
import { InputText } from '../../components/design-system/input'
import { Title } from '../../components/design-system/typography'

import { DefaultButton } from '../../components/common/Button'
import { useNavigation } from '@react-navigation/core'

export const UserIdentification = () => {
    const navigation = useNavigation()

    const [name, setName] = React.useState<string>('')

    const handleChange = function (value: string) {
        setName(value)
    }

    const handleSubmit = function () {
        navigation.navigate('Confirmation')
    }

    return (
        <SafeAreaViewContainer>
            <KeyBoardViewContainer behavior="height">
                <Container>
                    <HeaderContainer>
                        <Title>Como você se{'\n'}chama?</Title>
                    </HeaderContainer>
                    <InputText
                        placeholder="Digite seu nome"
                        placeholderTextColor="#444"
                        onChangeText={handleChange}
                    />
                    <FooterContainer>
                        <DefaultButton
                            buttonText="confirmar"
                            onPress={handleSubmit}
                        />
                    </FooterContainer>
                </Container>
            </KeyBoardViewContainer>
        </SafeAreaViewContainer>
    )
}

const KeyBoardViewContainer = styled.KeyboardAvoidingView`
    width: 100%;
    flex: 1;
`
const HeaderContainer = styled.View`
    margin-bottom: 64px;
`
const FooterContainer = styled.View`
    margin-top: 64px;
`
