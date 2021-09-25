import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ArticleList from './views/apps/articles/ArticleList';
import BookMarks from './views/apps/bookmarks';
import Articles from './views/apps/articles';
import Login from './views/pages/login';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ArticleList" component={ArticleList} />
      <Stack.Screen name="BookMarks" component={BookMarks} />
    </Stack.Navigator>
  );
}
function AppNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ArticleList" component={Articles} />
      <Stack.Screen name="BookMarks" component={BookMarks} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
export default AppNavigation;
