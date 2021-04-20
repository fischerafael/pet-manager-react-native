import React from 'react'
// import { useLoadFonts } from './src/hooks/useFont'

import { WelcomeScreen } from './src/screens/Welcome'
import { UserIdentification } from './src/screens/UserIdentification'
import { Confirmation } from './src/screens/Confirmation'
import Routes from './src/routes'

export default function App() {
    // const { isFontLoadeded, SplashScreen } = useLoadFonts()
    // if (!isFontLoadeded) return <SplashScreen />

    // return <WelcomeScreen />
    return <Routes />
}
