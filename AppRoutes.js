import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import CategoriasScreen from '../screens/CategoriasScreen';
import RestaurantesScreen from '../screens/RestaurantesScreen';
import ReservaScreen from '../screens/ReservaScreen';
import ConfirmacaoScreen from '../screens/ConfirmacaoScreen';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <NavigationContainer>

      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerTitleAlign: 'center',
        }}
      >

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />

        <Stack.Screen
          name="Categorias"
          component={CategoriasScreen}
          options={{ title: 'Categorias' }}
        />

        <Stack.Screen
          name="Restaurantes"
          component={RestaurantesScreen}
          options={{ title: 'Restaurantes' }}
        />

        <Stack.Screen
          name="Reserva"
          component={ReservaScreen}
          options={{ title: 'Reserva' }}
        />

        <Stack.Screen
          name="Confirmacao"
          component={ConfirmacaoScreen}
          options={{ title: 'Confirmação' }}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}