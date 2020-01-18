import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './components/Home';
import RecipeDetails from './components/RecipeDetails';
import RecipeList from './components/RecipeList';

//createStackNavigator(RouteConfigs, StackNavigatorConfig);

const StackNavigator = createStackNavigator(
	{
		Home: Home,
		RecipeList: RecipeList,
		RecipeDetails: RecipeDetails
	},
	{
		headerMode: 'none',
		navigationOptions: {
			headerVisible: false
		}
	}
);
const AppContainer = createAppContainer(StackNavigator);

export default class App extends React.Component {
	render() {
		return <AppContainer />;
	}
}
