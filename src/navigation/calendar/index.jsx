import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { theme } from '../../constants';
import { Calendar } from '../../screens';

const Stack = createNativeStackNavigator();

const CalendarNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Calendar"
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.primary },
        headerTintColor: theme.colors.text,
        headerTitleStyle: { fontFamily: theme.fonts.bold },
      }}>
      <Stack.Screen
        name="Calendar"
        component={Calendar}
        options={{ title: 'CALENDARIO', headerTitleAlign: 'center' }}
      />
    </Stack.Navigator>
  );
};

export default CalendarNavigator;
