import styled from 'styled-components/native'
// import { fonts } from '../../styles/fonts'
import { colors } from '../../../styles/colors'

export const Title = styled.Text`
    color: #fafafa;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`

export const SubTitle = styled.Text`
    color: #fafafa;
    font-size: 16px;
    text-align: center;
    line-height: 24px;
`

export const ButtonText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    width: 100%;
    color: ${() => colors.ligth};
    text-align: center;
`
