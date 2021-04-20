import React from 'react'
import styled from 'styled-components/native'

import { SafeAreaViewContainer } from '../../components/design-system/containers'
import { SubTitle, Title } from '../../components/design-system/typography'

export const Confirmation = () => {
    return (
        <SafeAreaViewContainer>
            <ConfirmationContainer>
                <Title>Voilá!</Title>
                <SubTitle>
                    Agora vamos começar a cuidar de seus pets com toda atenção e
                    carinho que eles merecem
                </SubTitle>
            </ConfirmationContainer>
        </SafeAreaViewContainer>
    )
}

const ConfirmationContainer = styled.View`
    flex: 1;
    justify-content: center;
`
