import SplashScreen from 'expo-app-loading'

import {
    useFonts,
    Poppins_400Regular,
    Poppins_700Bold
} from '@expo-google-fonts/poppins'

export const useLoadFonts = () => {
    const [isFontLoadeded] = useFonts([Poppins_400Regular, Poppins_700Bold])

    return { isFontLoadeded, SplashScreen }
}
