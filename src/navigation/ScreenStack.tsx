import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
    ScreenOne
} from '../screens';

interface ScreenStackInterface {

}

const Stack = createStackNavigator()

const ScreenStack: React.FC<ScreenStackInterface> = (props) => {
    const { } = props;


    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name={"ScreenOne"} component={ScreenOne} />
        </Stack.Navigator>
    );
};

export default ScreenStack;