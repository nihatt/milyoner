// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './src/redux';

// Sayfalar
import WelcomeScreen from './src/pages/welcomeScreen';
import GameScreen from './src/pages/gameScreen';
import LeaderBoardScreen from './src/pages/leaderBoardScreen';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }} // Başlık göstermemek için
          />
          <Stack.Screen
            name="Game"
            component={GameScreen}
            options={{ title: 'Oyun Ekranı' }}
          />
          <Stack.Screen
            name="LeaderBoard"
            component={LeaderBoardScreen}
            options={{ title: 'Lider Tablosu' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
