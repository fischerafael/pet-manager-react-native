import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { WelcomeScreen } from '../screens/Welcome'
import { UserIdentification } from '../screens/UserIdentification'
import { Confirmation } from '../screens/Confirmation'

const stackRoutes = createStackNavigator()

const AppRoutes: React.FC = () => {
    return (
        <stackRoutes.Navigator
            headerMode="none"
            screenOptions={{
                cardStyle: {
                    backgroundColor: 'black'
                }
            }}
        >
            <stackRoutes.Screen
                name="WelcomeScreen"
                component={WelcomeScreen}
            />
            <stackRoutes.Screen
                name="UserIdentification"
                component={UserIdentification}
            />
            <stackRoutes.Screen name="Confirmation" component={Confirmation} />
        </stackRoutes.Navigator>
    )
}

export default AppRoutes
