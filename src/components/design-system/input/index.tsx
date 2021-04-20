import styled from 'styled-components/native'

import { colors } from '../../../styles/colors'

export const Button = styled.TouchableOpacity`
    background: ${() => colors.primary};
    border: none;
    align-items: center;
    justify-content: center;
    height: 64px;
    padding: 0 32px;
    margin: 32px 0;
    border-radius: 16px;
    color: #fafafa;
`

export const InputText = styled.TextInput`
    border-bottom-width: 1px;
    font-size: 16px;
    width: 100%;
    border-color: ${() => colors.dark};
    color: ${() => colors.ligth};
    padding: 10px 0;
    margin: 10px;
    text-align: center;
`
