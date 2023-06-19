import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StartSesion, Home, Stock, Orders } from '../../screens';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={StartSesion} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: true }} />
      <Stack.Screen name="Stock" component={Stock} options={{ headerShown: true }} />
      <Stack.Screen name="Orders" component={Orders} options={{ headerShown: true }} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
