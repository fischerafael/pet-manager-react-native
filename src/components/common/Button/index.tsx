import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { Button } from '../../design-system/input'
import { ButtonText } from '../../design-system/typography'

interface Props extends TouchableOpacityProps {
    buttonText: string
}

export const DefaultButton = ({ buttonText, ...rest }: Props) => {
    return (
        <Button {...rest}>
            <ButtonText>{buttonText}</ButtonText>
        </Button>
    )
}
