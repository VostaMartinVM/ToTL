import React from 'react';
import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, TouchableOpacity, Text } from 'react-native';
import Languages from './pages/Languages';
import Planner from './pages/Planner';
import Notes from './pages/Notes';

type RootStackParamList = {
  Home: undefined;
  Languages: undefined;
  Planner: undefined;
  Notes: undefined;
};

type HomeScreenNavigationProp = NavigationProp<RootStackParamList, 'Home'>;

const Stack = createStackNavigator<RootStackParamList>();

const NavigationPage = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Languages" component={Languages} />
        <Stack.Screen name="Planner" component={Planner} />
        <Stack.Screen name="Notes" component={Notes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomePage: React.FC<{ navigation: HomeScreenNavigationProp }> = ({ navigation }) => {
  return (
    <View className='flex-1 justify-center items-center bg-gray-900'>
      <View className='flex-row mb-4'>
        <TouchableOpacity onPress={() => navigation.navigate('Languages')} className='w-24 h-24 justify-center items-center border border-black m-2 bg-gray-800 rounded-lg'>
          <Text className='text-white'>Languages</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Planner')} className='w-24 h-24 justify-center items-center border border-black m-2 bg-gray-800 rounded-lg'>
          <Text className='text-white'>Planner</Text>
        </TouchableOpacity>
      </View>
      <View className='flex-row'>
        <TouchableOpacity onPress={() => navigation.navigate('Notes')} className='w-24 h-24 justify-center items-center border border-black m-2 bg-gray-800 rounded-lg'>
          <Text className='text-white'>Notes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavigationPage;
