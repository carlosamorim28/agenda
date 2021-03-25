import React from 'react'
import {} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import MenuScreen from './screens/MenuScreen'
import CadastroScreen from './screens/CadastroScreen'
import ListaScreen from './screens/ListaScreen'


export default function Routes(){
    const Stack = createStackNavigator()
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='MenuScreen' component={MenuScreen}/>
                <Stack.Screen name='CadastroScreen' component={CadastroScreen}/>
                <Stack.Screen name='ListaScreen' component={ListaScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}