import './shims'

import React from 'react';
import { Platform, UIManager } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "./screens/Home"
import Swipeable from "./screens/Swipeable"
import Basic from "./screens/Basic"
import Nested from "./screens/Nested"
import Horizontal from "./screens/Horizontal"


if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: 'seashell' }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Examples" component={Home} />
              <Stack.Screen name="Swipeable" component={Swipeable} />
              <Stack.Screen name="Basic" component={Basic} />
              <Stack.Screen name="Nested" component={Nested} />
              <Stack.Screen name="Horizontal" component={Horizontal} />

          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;