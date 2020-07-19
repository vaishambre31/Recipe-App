import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import RecipesScreen from '../screens/RecipesScreen';
import RecipesDetail from '../screens/RecipesDetail';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();

export default () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="recipes"
                component={RecipesScreen}
                options={{
                    headerTitle: 'Home',
                    headerTintColor: Colors.colorDarkGrey,
                    headerStyle: {
                        backgroundColor: 'pink',
                    }
                }}
            />

            <Stack.Screen
                name="recipes_details"
                component={RecipesDetail}
                options={{
                    headerTransparent: true,
                    headerTitle: false,
                    headerTintColor: Colors.colorWhite
                }}
            />
        </Stack.Navigator>
    </NavigationContainer>
)
