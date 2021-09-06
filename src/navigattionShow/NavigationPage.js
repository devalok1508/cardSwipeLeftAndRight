// In NavigationPage.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LcateShow from '../screen/LcateShow';
import ShowScreen from '../screen/ShowScreen';

const Stack = createNativeStackNavigator();

const NavigationPage = () =>{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LcateShow" component={LcateShow} options={{
          headerShown:false
        }}/>
        <Stack.Screen name="ShowScreen" component={ShowScreen} options={{ 
          title:"Rotate",
          headerTitleAlign: 'center',
          headerTitleStyle: { alignSelf: 'center' },
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationPage;