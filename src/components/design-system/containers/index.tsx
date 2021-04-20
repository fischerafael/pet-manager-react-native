import styled, { css, ThemeConsumer } from 'styled-components/native'

import { colors } from '../../../styles/colors'

interface Props {
    colors?: 'primary' | 'dark'
}

export const SafeAreaViewContainer = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: space-around;
    background: ${() => colors.darker};
    padding: 32px;
`

export const Container = styled.View<Props>`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
    background: ${() => colors.darker};
    ${({ colors }) => colors === 'dark' && darkBg};
    ${({ colors }) => colors === 'primary' && primaryBg};
`

const darkBg = css`
    background: ${() => colors.dark};
`
const primaryBg = css`
    background: ${() => colors.primary};
`
